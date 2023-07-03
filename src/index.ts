import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-theme-solarized-dark extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-cyberpunk:plugin',
  description: 'Cyberpunk theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension jupyterlab-theme-cyberpunk is activated!'
    );
    const style = 'jupyterlab-theme-cyberpunk/index.css';

    manager.register({
      name: 'JupyterLab Cyberpunk',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;