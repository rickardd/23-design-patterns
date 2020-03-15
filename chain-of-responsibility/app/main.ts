import { Compressor } from "./compressor"
import { Logger } from "./logger"
import { Authenticator } from "./authenticator"
import { Encryptor } from "./encryptor"
import { HttpRequest } from "./http-request"
import { WebServer } from "./web-server"

class Main {
  constructor() {
    /**
     * Each task takes an handler to be executed when/if the task is done
     * Note: The tasks will be handled in reversed order. 
     */
    const compressor = new Compressor(null) // 6. Compression wont handle anything when done
    const encryptor = new Encryptor(compressor) // 5. Encryptor will handle compression when done
    const logger = new Logger(encryptor) // 4. Logger will handle encryption when done
    const authenticator = new Authenticator(logger) // 3. Authentication will handle logger when done
    const server = new WebServer(authenticator) // 2. Server will handle authentication when done

    server.handle(new HttpRequest("admin", "1234")) // 1. Setting up the webserver and then handles the authenci
  }
}

new Main();
