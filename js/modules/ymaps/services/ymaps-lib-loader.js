export class YMapsLibLoader {

    constructor(config) {

        this.windowRef = window;
        this.documentRef = document;
        this._scriptLoading;
        this.config = config || {};
        this._SCRIPT_ID = `${this.config.libName}`;
    }

    load() {
        if (this._scriptLoading) {
            return this._scriptLoading;
        }

        const scriptOnPage = this.documentRef.getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoading(scriptOnPage);
            return this._scriptLoading;
        }

        const script = this._createElementScript();
        script.src = this._getScriptSrc(this.config);
        this._assignScriptLoading(script);
        this.documentRef.head.appendChild(script);
        return this._scriptLoading;
    }

    _createElementScript() {
        const script = this.documentRef.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        return script;
    }

    _getScriptSrc(config) {
        return config.url;
    }


    _assignScriptLoading(scriptElem) {
        this._scriptLoading = new Promise(async (resolve, reject) => {
            scriptElem.onload = () => resolve(true);
            scriptElem.onerror = (error) => console.log(error);
        });
    }
}