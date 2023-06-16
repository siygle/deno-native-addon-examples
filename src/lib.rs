extern crate sysctl;
use sysctl::Sysctl;

#[no_mangle]
pub extern "C" fn get_hw_ncpu() -> i32 {
    let v = sysctl::Ctl::new("hw.ncpu")
        .unwrap()
        .value()
        .unwrap()
        .to_string();
    let r = v.parse::<i32>().unwrap();
    return r;
}

#[no_mangle]
pub extern "C" fn get_hw_active_cpu() -> i32 {
    let v = sysctl::Ctl::new("hw.activecpu")
        .unwrap()
        .value()
        .unwrap()
        .to_string();
    let r = v.parse::<i32>().unwrap();
    return r;
}
