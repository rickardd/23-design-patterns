import { Editor } from './editor'
import { History } from './history'

class Main {
    constructor() {
        let editor = new Editor()
        let history = new History()

        editor.setContent("a")
        history.push(editor.createState())

        editor.setContent("b")
        history.push(editor.createState())

        editor.setContent("c")

        editor.restore(history.pop())
        editor.restore(history.pop())

        console.log('OUTPUT', editor.getContent())
    }
}

new Main()