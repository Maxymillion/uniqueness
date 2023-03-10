import {Plugin} from 'obsidian';
import {DEFAULT_SETTINGS, Settings} from "./utils/types";
import {SettingsTab} from "./components/Settings";

export default class UniquePage extends Plugin {
	settings: Settings;

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new SettingsTab(this.app, this));

		this.registerEvent(this.app.vault.on('create', (e) => {
			console.log('a new file has entered the arena');
			console.log(e);
		}));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}



