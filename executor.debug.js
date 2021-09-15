const execs = new Set();

export default class ExecutorDebug {

	static get executers() {
		return execs
	}

	static executeNext() {
		if (!execs.size) {
			console.log('No hay más executors.');
			return;
		}
		for (let itm of execs) {
			itm.execute();
			break;
		}
	}

	static executeAll() {
		for (let itm of execs) {
			itm.execute();
		}
	}

	// executor
	// executed
	constructor (fn) {
		this.executor = fn
		this.executed = false;
		// if (!execs.includes(this)) execs.push(this);
		execs.add(this);
	}

	execute() {
		if (!this.executed) {
			this.executed = true;
			this.executor();
			execs.delete(this);
			// index
		}
	}
}

window.ExecutorDebug = ExecutorDebug