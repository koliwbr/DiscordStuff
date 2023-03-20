const { default: ReactComponents } = require("zerespluginlibrary/types/modules/reactcomponents");

/**
 * 
 * @param {import("zerespluginlibrary").Plugin} Plugin 
 * @param {import("zerespluginlibrary").BoundAPI} Library 
 * @returns 
 */
module.exports = (Plugin, Library) => {

    const {DiscordModules, Logger, Patcher, Settings, Toasts, ContextMenu} = Library;
    const {MessageActions, Dispatcher, React} = DiscordModules;
    const ContextMenuAPI = HomeButtonContextMenuApi.shouldUpdate() ? window.HomeButtonContextMenuApi = HomeButtonContextMenuApi : window.HomeButtonContextMenuApi;

    const Icon = (width,height) => 
        React.createElement(
            "svg",
            {
            viewBox: "0 0 24 24",
            width,
            height,
            },
            React.createElement("path", {
            style: {
                fill: "currentColor",
            },
            d: "M6.25 4.5C7.2165 4.5 8 5.2835 8 6.25V8H6.25C5.2835 8 4.5 7.2165 4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5ZM9.5 8V6.25C9.5 4.45507 8.04493 3 6.25 3C4.45507 3 3 4.45507 3 6.25C3 8.04493 4.45507 9.5 6.25 9.5H8V14.5H6.25C4.45507 14.5 3 15.9551 3 17.75C3 19.5449 4.45507 21 6.25 21C8.04493 21 9.5 19.5449 9.5 17.75V16H14.5V17.75C14.5 19.5449 15.9551 21 17.75 21C19.5449 21 21 19.5449 21 17.75C21 15.9551 19.5449 14.5 17.75 14.5H16V9.5H17.75C19.5449 9.5 21 8.04493 21 6.25C21 4.45507 19.5449 3 17.75 3C15.9551 3 14.5 4.45507 14.5 6.25V8H9.5ZM9.5 9.5H14.5V14.5H9.5V9.5ZM16 8V6.25C16 5.2835 16.7835 4.5 17.75 4.5C18.7165 4.5 19.5 5.2835 19.5 6.25C19.5 7.2165 18.7165 8 17.75 8H16ZM16 16H17.75C18.7165 16 19.5 16.7835 19.5 17.75C19.5 18.7165 18.7165 19.5 17.75 19.5C16.7835 19.5 16 18.7165 16 17.75V16ZM8 16V17.75C8 18.7165 7.2165 19.5 6.25 19.5C5.2835 19.5 4.5 18.7165 4.5 17.75C4.5 16.7835 5.2835 16 6.25 16H8Z",
            })
        );


    
    return class extends Plugin {
        constructor() {
            super();
            
        }

        onStart() {
            Logger.info("Enabling tokenReset!");

            
            ContextMenuAPI.insert()
            
        }

        makeMenuItem(){
            return {
                label: "Reset Token",
                id: "resetToken",
                icon: () => Icon,
                action: async () => {
                    // reset the token
                }
            }
        }

        onStop() {
            Patcher.unpatchAll();
            Logger.info("Disabling tokenReset!");
        }
    };

};