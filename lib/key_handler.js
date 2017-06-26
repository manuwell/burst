class KeyHandler{
  constructor(options={}){
    this._options  = this._build_options(options)
    this._bindings = {}

    this._meta_pressed = false
  }

  handle(e){
    let key_code = e.which

    this._log("init", this)
    this._log("is_meta", this._is_meta_key(key_code))
    if(this._is_meta_key(key_code)){
      this._enable_meta()
    }

    let key = this._key_letter(key_code)
    if(this._meta_pressed && this._bindings[key]){
      this._bindings[key]()
    }

    this._log("meta_pressed", this._meta_pressed, "key_pressed", key_code, key)
    this._disable_meta()
  }

  get bindings(){
    let bindings = {}
    return Object.assign(bindings, this._bindings)
  }

  bind(key, handler){
    this._bindings[key] = handler
    return this;
  }

  _log(){
    if(this._options.debug){
      console.log.call("KeyHandler", arguments)
    }
  }

  _key_letter(key_code){
    return String.fromCharCode(key_code).toLowerCase()
  }

  _default_options(){
    return Object.freeze({
      meta_key: 1, // CTRL + A
      debug: false
    })
  }

  _build_options(options){
    let new_options = {}
    Object.assign(new_options, this._default_options(), options)

    console.log(new_options)
    return new_options;
  }

  _is_meta_key(key_code){
    return this._options.meta_key == key_code
  }

  _enable_meta(){
    this._meta_pressed = true
  }

  _disable_meta(){
    this._options.meta_key = false
  }
}
