import { EditorState } from './editor-state'

export class Editor {

    private content: string = ""

    public createState(): EditorState {
        return new EditorState(this.content)
    }

    public restore(state: EditorState) {
        this.content = state.getContent()
    }

    public getContent(): string {
        return this.content
    }

    public setContent(content: string) {
        this.content = content
    }
}