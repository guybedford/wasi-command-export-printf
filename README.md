# Spidermonkey Component Command Test

Demonstrates spidermonkey running on Node.js via WASI preview2.

Builds `component_runtime.core.wasm` against `wasi_snapshot_preview1.command.wasm` when running:

```
./build-preview2.sh
```

Outputting `dist` containing the JS component.

Test runs with `node test.js` against this component.

The test demonstrates a command followed by running an export.

The code in the export includes the following:

```c
printf("HELLO LOG");
component_runtime_string_t log { .ptr = const_cast<char*>(&"HELLO() LOG"[0]), .len = 11 };
wasi_logging2_log(WASI_LOGGING2_LEVEL_INFO, &log, &log);
```

This should output:

```
HELLO LOG
info: (HELLO() LOG) HELLO() LOG
```

But instead the printf gets masked.

The `printf` calls during the command `main` work fine though, outputting:

```
:: Initializing
:: Initialization completed successfully
```

Therefore `printf` is somehow being disabled after `main`.
