import { EditorState } from "./editor-state";

export class History {
    private state: EditorState[] = []

    public push(state: EditorState): void {
        this.state.push(state)
    }

    public pop(): any {
        return this.state.pop()
    }
}