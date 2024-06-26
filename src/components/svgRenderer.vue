<template>
  <svg
    ref="svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size.w"
    :height="size.h"
    class="net-svg"
    @mouseup="emit('dragEnd', [$event])"
    @touchend.passive="emit('dragEnd', [$event])"
  >
    <g
      id="l-links"
      class="links"
    >
      <path
        v-for="link in links"
        :key="link.id"
        :id="link.id"
        :d="linkPath(link)"
        v-bind="linkAttrs(link)"
        :class="linkClass(link.id)"
        :style="linkStyle(link)"
        @click="emit('linkClick', [$event,link])"
        @touchstart.passive="emit('linkClick', [$event,link])"
      />
    </g>
    <g
      v-if="!noNodes"
      id="l-nodes"
      class="nodes"
    >
      <template
        v-for="(node, key) in nodes"
        :key="key"
      >
        <svg
          v-if="svgIcon(node)"
          :viewBox="svgIcon(node).attrs.viewBox"
          :width="getNodeSize(node, 'width')"
          :height="getNodeSize(node, 'height')"
          :x="node.x - getNodeSize(node, 'width') / 2"
          :y="node.y - getNodeSize(node, 'height') / 2"
          :style="nodeStyle(node)"
          :title="node.name"
          :class="nodeClass(node,['node-svg'])"
          v-bind="node._svgAttrs"
          @click="emit('nodeClick',[$event,node])"
          @touchend.passive="emit('nodeClick',[$event,node])"
          @mousedown.prevent="emit('dragStart',[$event,key])"
          @touchstart.prevent="emit('dragStart',[$event,key])"
          v-html="svgIcon(node).data"
        />
        <circle
          v-else
          :r="getNodeSize(node) / 2"
          :cx="node.x"
          :cy="node.y"
          :style="nodeStyle(node)"
          :title="node.name"
          :class="nodeClass(node)"
          v-bind="node._svgAttrs"
          @click="emit('nodeClick',[$event,node])"
          @touchend.passive="emit('nodeClick',[$event,node])"
          @mousedown.prevent="emit('dragStart',[$event,key])"
          @touchstart.prevent="emit('dragStart',[$event,key])"
        />
      </template>
    </g>

    <g
      v-if="linkLabels"
      id="link-labels"
      class="labels"
    >
      <text 
        v-for="link in links"
        :key="link.id"
        class="link-label"
        fontSize="fontSize"
      >
        <textPath
          :xlink:href="'#' + link.id"
          startOffset="50%"
        >
          {{ link.name }}
        </textPath>
      </text>
    </g>

    <g
      v-if="nodeLabels"
      id="node-labels"
      class="labels"
    >
      <text 
        v-for="node in nodes"
        :key="node.id"
        class="node-label"
        :x="node.x + (getNodeSize(node) / 2) + (fontSize / 2)"
        :y="node.y + labelOffset.y"
        :font-size="fontSize"
        :class="(node._labelClass) ? node._labelClass : ''"
        :stroke-width="fontSize / 8"
      >
        {{ node.name }}
      </text>
    </g>
  </svg>
</template>

<script>
import svgExport from '../lib/js/svgExport.js'

export default {
  name: 'SvgRenderer',
  props: [
    'size',
    'nodes',
    'noNodes',
    'selected',
    'linksSelected',
    'links',
    'nodeSize',
    'padding',
    'fontSize',
    'strLinks',
    'linkWidth',
    'nodeLabels',
    'linkLabels',
    'labelOffset',
    'nodeSym'
  ],
  computed: {
    nodeSvg () {
      if (this.nodeSym) {
        return svgExport.toObject(this.nodeSym)
      }
      return null
    }
  },
  methods: {
    getNodeSize (node, side) {
      let size = node._size || this.nodeSize
      if (side) size = node['_' + side] || size
      return size
    },
    svgIcon (node) {
      return node.svgObj || this.nodeSvg
    },
    emit (e, args) {
      this.$emit('action', e, args)
    },
    svgScreenShot (cb, toSvg, background, allCss) {
      let svg = svgExport.export(this.$refs.svg, allCss)
      if (!toSvg) {
        if (!background) background = this.searchBackground()
        let canvas = svgExport.makeCanvas(this.size.w, this.size.h, background)
        svgExport.svgToImg(svg, canvas, (err, img) => {
          if (err) cb(err)
          else cb(null, img)
        })
      } else {
        cb(null, svgExport.save(svg))
      }
    },
    linkClass (linkId) {
      let cssClass = ['link']
      if (this.linksSelected.hasOwnProperty(linkId)) {
        cssClass.push('selected')
      }
      if (!this.strLinks) {
        cssClass.push('curve')
      }
      return cssClass
    },
    linkPath (link) {
      let d = {
        M: [link.source.x | 0, link.source.y | 0],
        X: [link.target.x | 0, link.target.y | 0]
      }
      if (this.strLinks) {
        return 'M ' + d.M.join(' ') + ' L' + d.X.join(' ')
      } else {
        d.Q = [link.source.x, link.target.y]
        return 'M ' + d.M + ' Q ' + d.Q.join(' ') + ' ' + d.X
      }
    },
    nodeStyle (node) {
      return (node._color) ? 'fill: ' + node._color : ''
    },
    linkStyle (link) {
      let style = {}
      if (link._color) style.stroke = link._color
      return style
    },
    nodeClass (node, classes = []) {
      let cssClass = (node._cssClass) ? node._cssClass : []
      if (!Array.isArray(cssClass)) cssClass = [cssClass]
      cssClass.push('node')
      classes.forEach(c => cssClass.push(c))
      if (this.selected[node.id]) cssClass.push('selected')
      if (node.fx || node.fy) cssClass.push('pinned')
      return cssClass
    },
    searchBackground () {
      let vm = this
      while (vm.$parent) {
        let style = window.getComputedStyle(vm.$el)
        let background = style.getPropertyValue('background-color')
        let rgb = background.replace(/[^\d,]/g, '').split(',')
        let sum = rgb.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        if (sum > 0) return background
        vm = vm.$parent
      }
      return 'white'
    },
    spriteSymbol () {
      let svg = this.nodeSym
      if (svg) {
        return svgExport.toSymbol(svg)
      }
    },
    linkAttrs (link) {
      let attrs = link._svgAttrs || {}
      attrs['stroke-width'] = attrs['stroke-width'] || this.linkWidth
      return attrs
    }
  }
}
</script>
