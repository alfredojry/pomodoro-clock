var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // React
var
PomodoroClock = function (_React$Component) {_inherits(PomodoroClock, _React$Component);
  function PomodoroClock(props) {_classCallCheck(this, PomodoroClock);var _this = _possibleConstructorReturn(this, (PomodoroClock.__proto__ || Object.getPrototypeOf(PomodoroClock)).call(this,
    props));
    _this.state = {
      breakLength: 5,
      sessionLength: 25,
      time: 1500,
      start: false,
      processID: 0,
      session: true };

    _this.handleReset = _this.handleReset.bind(_this);
    _this.breakDecrement = _this.breakDecrement.bind(_this);
    _this.breakIncrement = _this.breakIncrement.bind(_this);
    _this.sessionDecrement = _this.sessionDecrement.bind(_this);
    _this.sessionIncrement = _this.sessionIncrement.bind(_this);
    _this.handleStartStop = _this.handleStartStop.bind(_this);
    _this.startClock = _this.startClock.bind(_this);
    _this.stopClock = _this.stopClock.bind(_this);
    _this.countdown = _this.countdown.bind(_this);
    _this.altSessBre = _this.altSessBre.bind(_this);return _this;
  }_createClass(PomodoroClock, [{ key: 'handleReset', value: function handleReset()

    {
      var alarm = document.getElementById('beep');
      this.setState({
        breakLength: 5,
        sessionLength: 25,
        time: 1500,
        start: false,
        processID: 0,
        session: true });

      clearInterval(this.state.processID);
      alarm.pause();
      alarm.currentTime = 0;
    } }, { key: 'breakDecrement', value: function breakDecrement()

    {
      if (this.state.breakLength > 1) {
        this.setState({
          breakLength: this.state.breakLength - 1 });

      }
    } }, { key: 'breakIncrement', value: function breakIncrement()

    {
      if (this.state.breakLength < 60) {
        this.setState({
          breakLength: this.state.breakLength + 1 });

      }
    } }, { key: 'sessionDecrement', value: function sessionDecrement()

    {
      if (this.state.sessionLength > 1 && this.state.time > 1) {
        this.setState({
          sessionLength: this.state.sessionLength - 1,
          time: this.state.time - 60 });

      }
    } }, { key: 'sessionIncrement', value: function sessionIncrement()

    {
      if (this.state.sessionLength < 60) {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          time: this.state.time + 60 });

      }
    } }, { key: 'startClock', value: function startClock()

    {
      this.setState({
        start: !this.state.start,
        processID: setInterval(this.countdown, 1000) });

    } }, { key: 'stopClock', value: function stopClock()

    {
      this.setState({
        start: !this.state.start });

      clearInterval(this.state.processID);
    } }, { key: 'countdown', value: function countdown()

    {
      var alarm = document.getElementById('beep');
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time - 1 });

      } else {
        clearInterval(this.state.processID);
        alarm.currentTime = 0;
        alarm.play();
        this.altSessBre();
      }
    } }, { key: 'altSessBre', value: function altSessBre()

    {
      if (this.state.session) {
        this.setState({
          time: this.state.breakLength * 60,
          session: false,
          processID: setInterval(this.countdown, 1000) });

      } else {
        this.setState({
          time: this.state.sessionLength * 60,
          session: true,
          processID: setInterval(this.countdown, 1000) });

      }
    } }, { key: 'handleStartStop', value: function handleStartStop()

    {
      if (!this.state.start) {
        this.startClock();
      } else {
        this.stopClock();
      }
    } }, { key: 'render', value: function render()

    {
      var min = Math.floor(this.state.time / 60);
      var sec = this.state.time % 60;
      var checkNum = function checkNum(num) {return num === 0 ? '00' : num < 10 ? '0' + num : num.toString();};
      var showTime = checkNum(min) + ':' + checkNum(sec);

      return React.createElement('div', null,
        React.createElement('div', { id: 'top-container' },
          React.createElement('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdx9_zMAoJ7xv-po_nmRO4noDN2E03gK2XHSzoV3-jvvGxywam', className: 'tomato', alt: 'tomato animated' }),
          React.createElement('h2', null, 'Pomodoro Clock')),

        React.createElement('div', { id: 'label-container' },
          React.createElement('div', { id: 'break-label', className: 'length text' }, 'Break Length',
            React.createElement('div', { className: 'container-buttons' },
              React.createElement('button', { id: 'break-decrement', onClick: this.breakDecrement }, React.createElement('i', { className: 'fas fa-minus' })),
              React.createElement('button', { id: 'break-increment', onClick: this.breakIncrement }, React.createElement('i', { className: 'fas fa-plus' })),
              React.createElement('div', { id: 'break-length', className: 'text number' }, this.state.breakLength))),


          React.createElement('div', { id: 'session-label', className: 'length text' }, 'Session Length',
            React.createElement('div', { className: 'container-buttons' },
              React.createElement('button', { id: 'session-decrement', onClick: this.sessionDecrement }, React.createElement('i', { className: 'fas fa-minus' })),
              React.createElement('button', { id: 'session-increment', onClick: this.sessionIncrement }, React.createElement('i', { className: 'fas fa-plus' })),
              React.createElement('div', { id: 'session-length', className: 'text number' }, this.state.sessionLength)))),



        React.createElement('div', { id: 'clock' },
          React.createElement('div', { id: 'timer-label', className: 'text' }, this.state.session ? 'Session' : 'Break'),
          React.createElement('div', { id: 'time-left' }, showTime),
          React.createElement('div', { id: 'controls' },
            React.createElement('button', { id: 'start_stop', onClick: this.handleStartStop, style: { margin: 10 } }, !this.state.start ? React.createElement('i', { className: 'fas fa-play' }) : React.createElement('i', { className: 'fas fa-pause' })),
            React.createElement('button', { id: 'reset', onClick: this.handleReset, style: { margin: 10 } }, React.createElement('i', { className: 'fas fa-sync-alt' })))),


        React.createElement('audio', { id: 'beep', src: 'https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3' }),
        React.createElement('div', { id: 'credits' }, 'Designed and Coded by', React.createElement('br', null), React.createElement('a', { href: 'https://github.com/yoelvisj/', target: '_blank' }, 'Yoelvis Jim\xE9nez')));

    } }]);return PomodoroClock;}(React.Component);


ReactDOM.render(React.createElement(PomodoroClock, null), document.getElementById('root'));