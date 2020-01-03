import DraggableDirective from './DraggableDirective';

const DraggableDirective = {
  install(Vue, options) {
    Vue.directive('draggable', MyDirective)
  }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.directive('draggable', MyDirective)
}

export default DraggableDirective;