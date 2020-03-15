"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compressor_1 = require("./compressor");
const logger_1 = require("./logger");
const authenticator_1 = require("./authenticator");
const encryptor_1 = require("./encryptor");
const http_request_1 = require("./http-request");
const web_server_1 = require("./web-server");
class Main {
    constructor() {
        /**
         * Each task takes an handler to be executed when/if the task is done
         * Note: The tasks will be handled in reversed order.
         */
        const compressor = new compressor_1.Compressor(null); // 6. Compression wont handle anything when done
        const encryptor = new encryptor_1.Encryptor(compressor); // 5. Encryptor will handle compression when done
        const logger = new logger_1.Logger(encryptor); // 4. Logger will handle encryption when done
        const authenticator = new authenticator_1.Authenticator(logger); // 3. Authentication will handle logger when done
        const server = new web_server_1.WebServer(authenticator); // 2. Server will handle authentication when done
        server.handle(new http_request_1.HttpRequest("admin", "1234")); // 1. Setting up the webserver and then handles the authenci
    }
}
new Main();
