export default class NullLoggerTransport {
    log(level, msg, meta, callback) {
        callback(null);
    }
}
