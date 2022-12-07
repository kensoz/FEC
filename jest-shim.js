// Jest セットアップ
// https://www.appsloveworld.com/reactjs/100/9/referenceerror-textencoder-is-not-defined-when-running-react-scripts-test-e
// [SOLVED]-`REFERENCEERROR: TEXTENCODER IS NOT DEFINED` WHEN RUNNING `REACT-SCRIPTS TEST --ENV=JSDOM`-REACTJS
import { TextDecoder, TextEncoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
