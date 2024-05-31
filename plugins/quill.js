import Vue from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Register Quill globally
Vue.prototype.$Quill = Quill;

// Register hljs globally for syntax highlighting
window.hljs = hljs;

// Register katex globally for LaTeX math
window.katex = katex;

