import pkg from './package.json'
import buble from 'rollup-plugin-buble'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'umd', name: 'Emitter' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
  	buble()
  ]
}
