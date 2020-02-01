import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './selection.json';
const expoAssetId = require('../../../assets/fonts/mcp-iconpack.ttf');
export default createIconSetFromIcoMoon(icoMoonConfig, 'mcp-icons', expoAssetId);