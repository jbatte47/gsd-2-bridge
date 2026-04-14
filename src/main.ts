import { Notice, Plugin } from "obsidian";

export default class Gsd2BridgePlugin extends Plugin {
  async onload(): Promise<void> {
    this.addCommand({
      id: "sync-markdown-tasks",
      name: "Sync markdown tasks with GSD-2",
      callback: () => {
        new Notice("GSD-2 Bridge sync command is ready to be wired.");
      }
    });

    this.addCommand({
      id: "dispatch-ready-work",
      name: "Dispatch ready work to GSD-2 CLI",
      callback: () => {
        new Notice("GSD-2 Bridge dispatch command is ready to be wired.");
      }
    });
  }
}
