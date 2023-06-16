const libName = 'target/debug/libdeno_ffi_test.dylib';
const dylib = Deno.dlopen(libName, {
  "get_hw_ncpu": { parameters: [], result: 'i32' },
  "get_hw_active_cpu": { parameters: [], result: 'i32' }
})

console.log('info:ncpu', dylib.symbols.get_hw_ncpu())
console.log('info:ctive_cpu', dylib.symbols.get_hw_active_cpu())

dylib.close();
