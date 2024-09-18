!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "27e04049-7494-5674-99c7-6b36b5a8a227"));
  } catch (e) {}
})();
(self.webpackChunkgrowth_game_ui = self.webpackChunkgrowth_game_ui || []).push([
  [9910],
  {
    J5u7: (t, e, i) => {
      "use strict";
      i.d(e, {
        x: () => o,
      });
      var s = i("HX/w"),
        n = i("yQTX"),
        a = i("Luap");
      function o(t) {
        var e;
        if ("undefined" !== typeof window) {
          (0, s.M9)("lang", t, 365, !0, "High"),
            (0, s.M9)("language", t, 180, !1);
          var i = new URL(window.location.href),
            o =
              null === (e = i.pathname.match(n.s)) || void 0 === e
                ? void 0
                : e[1];
          o && (0, a.f)(o) && (i.pathname = i.pathname.replace(n.s, "")),
            i.searchParams.delete("hl"),
            (window.location.href = i.href);
        }
      }
    },
    NXaq: (t, e, i) => {
      "use strict";
      i.r(e),
        i.d(e, {
          default: () => q,
        });
      var s = i("sViW"),
        n = i("BK7R"),
        a = i("QUKP"),
        o = i("gZfF"),
        r = i("VP0d"),
        h = i("0GOp"),
        l = i.n(h),
        c = i("TrCV"),
        d = i("DTvD"),
        u = i.n(d),
        m = i("JfTh"),
        f = i("X0Bn"),
        p = i("zRna"),
        g = i("a4fF"),
        v = function (t) {
          switch (t) {
            default:
              return;
            case "error":
              return u().createElement(f.A, {
                name: "CircledCloseF",
                className: "text-Error",
                color: "Error",
              });
            case "success":
              return u().createElement(p.A, {
                name: "CircledCheckmarkF",
                className: "text-Success",
                color: "Success",
              });
          }
        },
        y = i("5htd"),
        x = i("elZI"),
        A = i("wIZF"),
        k = i("Y4uf");
      const w = function (t) {
        return u().createElement(
          k.A,
          (0, A.__assign)(
            {
              viewBox: "0 0 24 24",
              fill: "none",
            },
            t
          ),
          u().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 21l-5-5H3V8h4l5-5v18zm9.015-9a9.968 9.968 0 01-2.93 7.072l-1.767-1.768a7.477 7.477 0 002.197-5.303c0-2.071-.84-3.946-2.197-5.304l1.768-1.767A9.969 9.969 0 0121.015 12z",
            fill: "currentColor",
          }),
          u().createElement("path", {
            d: "M15.535 15.536A4.984 4.984 0 0017 12c0-1.38-.56-2.63-1.465-3.535l-1.767 1.768c.452.452.732 1.077.732 1.767s-.28 1.316-.732 1.768l1.767 1.768z",
            fill: "currentColor",
          })
        );
      };
      const S = function (t) {
        return u().createElement(
          k.A,
          (0, A.__assign)(
            {
              viewBox: "0 0 24 24",
              fill: "none",
            },
            t
          ),
          u().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 21l-5-5H3V8h4l5-5v18zm1.702-6.702L16 12l-2.298-2.298 1.768-1.767 2.298 2.297 2.298-2.298L21.834 9.7 19.535 12l2.299 2.299-1.768 1.767-2.298-2.298-2.298 2.297-1.768-1.767z",
            fill: "currentColor",
          })
        );
      };
      var E = i("Lp65"),
        L = i("5G5+"),
        T = i("eeEA"),
        M = i("6h1A"),
        b = i("kYnA"),
        D = i("7tD2"),
        P = i("BejE"),
        O = i("Smuz"),
        C = i("1Mr6"),
        R = i("uqCI"),
        _ = i("888e"),
        N = i("nG1z"),
        I = i("ezuS"),
        G = i("2PCm"),
        j = i("4Y6J"),
        B = i("b9+J"),
        F = {
          REWARD: {
            t: 1,
            img: "item-token",
          },
          TRAP: {
            t: 0,
            img: "item-planet",
          },
          BONUS: {
            t: 2,
            img: "item-bonus",
            tweenSetting: {
              y: {
                getEnd: function (t) {
                  return t.y - 5;
                },
              },
              duration: 750,
              ease: "Sine.easeInOut",
              yoyo: !0,
              repeat: -1,
            },
          },
        },
        H = 300,
        z = function (t) {
          return Math.random() * (t || 1);
        },
        U = function (t, e) {
          return [
            Math.floor(z(t - 100) + 50),
            Math.floor(z(e - 300 - 100) + 300 + 50),
          ];
        };
      const Y = (function (t) {
        (0, G.A)(i, t);
        var e = (0, j.A)(i);
        function i() {
          var t;
          return (
            (0, _.A)(this, i),
            (t = e.call(this, "game")),
            (0, I.A)((0, R.A)(t), "swipeSpeed", H),
            (0, I.A)((0, R.A)(t), "swipeSpeedLate", H),
            (0, I.A)((0, R.A)(t), "stickOffsetX", 0),
            (0, I.A)((0, R.A)(t), "stickOffsetY", 0),
            (0, I.A)((0, R.A)(t), "isPlaying", !1),
            (0, I.A)((0, R.A)(t), "isAiming", !1),
            (0, I.A)((0, R.A)(t), "isFiring", !1),
            (0, I.A)((0, R.A)(t), "isPulling", !1),
            (0, I.A)((0, R.A)(t), "swipeMovement", null),
            (0, I.A)((0, R.A)(t), "playerMovement", []),
            (0, I.A)((0, R.A)(t), "selectedItem", null),
            (0, I.A)((0, R.A)(t), "colliders", []),
            (0, I.A)((0, R.A)(t), "hook", null),
            (0, I.A)((0, R.A)(t), "hookBody", null),
            (0, I.A)((0, R.A)(t), "stick", null),
            (0, I.A)((0, R.A)(t), "timeLeft", 0),
            (0, I.A)((0, R.A)(t), "timeLeftSec", 0),
            (0, I.A)((0, R.A)(t), "score", 0),
            (0, I.A)((0, R.A)(t), "data", []),
            (0, I.A)((0, R.A)(t), "firingPosition", null),
            (0, I.A)((0, R.A)(t), "currentItem", null),
            (0, I.A)((0, R.A)(t), "twinklingStar", null),
            (0, I.A)((0, R.A)(t), "bgm", null),
            (0, I.A)((0, R.A)(t), "sfxClaim", null),
            (0, I.A)((0, R.A)(t), "sfxDrag", null),
            (0, I.A)((0, R.A)(t), "sfxFire", null),
            (0, I.A)((0, R.A)(t), "sfxGameOver", null),
            (0, I.A)((0, R.A)(t), "sfxHitItem", null),
            (0, I.A)((0, R.A)(t), "sfxHitTrap", null),
            (0, I.A)((0, R.A)(t), "sfxTimeRunningOut", null),
            (0, I.A)((0, R.A)(t), "isLate", !1),
            t
          );
        }
        return (
          (0, N.A)(i, [
            {
              key: "preload",
              value: function () {
                var t = this;
                this.game.events.on("TOGGLE_SOUND", function (e) {
                  t.sys.sound.setMute(!e);
                }),
                  (this.load.crossOrigin = "anonymous"),
                  this.load.setBaseURL("".concat(B.CA, "/game-assets")),
                  this.load.image("astronaut", "spaceship.png"),
                  this.load.image("item-planet", "item-planet.png"),
                  this.load.image("item-token", "item-token.png"),
                  this.load.image("item-bonus", "item-bonus.png"),
                  this.load.image("start-twinkle", "start-twinkle.png"),
                  this.load.spritesheet("hook", "hook.png", {
                    frameWidth: 204,
                    frameHeight: 185,
                  }),
                  this.load.audio("bgm", "sound/bgm.mp3"),
                  this.load.audio("sfx-claim", "sound/sfx-claim.mp3"),
                  this.load.audio("sfx-drag", "sound/sfx-drag.mp3"),
                  this.load.audio("sfx-fire", "sound/sfx-fire.mp3"),
                  this.load.audio("sfx-gameover", "sound/sfx-gameover.mp3"),
                  this.load.audio("sfx-hititem", "sound/sfx-hititem.mp3"),
                  this.load.audio("sfx-hittrap", "sound/sfx-hittrap.mp3"),
                  this.load.audio(
                    "sfx-timerunningout",
                    "sound/sfx-timerunningout.mp3"
                  ),
                  this.load.on("progress", function (e) {
                    t.game.events.emit("LOAD_PROGRESS", e);
                  }),
                  this.load.on("complete", function () {
                    t.game.events.emit("LOAD_COMPLETE");
                  });
              },
            },
            {
              key: "create",
              value: function () {
                var t = this,
                  e = this.game.config,
                  i = e.width,
                  s = e.height,
                  o = this.game.config.customData;
                (this.swipeSpeed = o.TEST_HOOK_SPEED || o.hookSwipeSpeed),
                  (this.swipeSpeedLate =
                    o.TEST_HOOKFINAL_SPEED || o.finalHookSwipeSpeed),
                  (this.walls = this.add.group()),
                  this.walls.add(
                    this.physics.add.existing(
                      this.add.rectangle(0, s / 2, 1, s),
                      !0
                    )
                  ),
                  this.walls.add(
                    this.physics.add.existing(
                      this.add.rectangle(i, s / 2, 1, s),
                      !0
                    )
                  ),
                  this.walls.add(
                    this.physics.add.existing(
                      this.add.rectangle(i / 2, 0, i, 1),
                      !0
                    )
                  ),
                  this.walls.add(
                    this.physics.add.existing(
                      this.add.rectangle(i / 2, s, i, 1),
                      !0
                    )
                  ),
                  (this.items = this.add.group()),
                  o.itemSettingList.forEach(function (e) {
                    var n = e.type,
                      a = e.speed,
                      r = e.size;
                    e.rewardValueList.forEach(function (e) {
                      var h = U(i, s),
                        l = F[n],
                        c = t.add.image(h[0], h[1], l.img);
                      (c.speed = o["TEST_".concat(n, "_SPEED")] || a),
                        (c.pts = e),
                        (c.type = n),
                        (c.size = r),
                        (c.tweenSetting = l.tweenSetting),
                        c.setDisplaySize(r, r),
                        c.setDepth(3);
                      for (
                        var d = t.physics.add.existing(c), u = 30;
                        u > 0 &&
                        t.items.children.entries.some(function (e) {
                          return t.physics.world.intersects(d.body, e.body);
                        });

                      ) {
                        var m = U(i, s);
                        d.setPosition(m[0], m[1]),
                          d.body.updateFromGameObject(),
                          u--;
                      }
                      t.items.add(d);
                    });
                  }),
                  this.items.children.entries.forEach(function (e) {
                    var i = 0.1 * e.width;
                    if (
                      (e.body.setCircle(e.width / 2 - i, i, i), e.tweenSetting)
                    ) {
                      var s = t.tweens.add(
                        (0, a.A)(
                          (0, n.A)(
                            {
                              targets: e,
                            },
                            e.tweenSetting
                          ),
                          {
                            delay: z(e.tweenSetting.duration),
                          }
                        )
                      );
                      e.tween = s;
                    }
                  }),
                  (this.player = this.add.image(i / 2, 100, "astronaut")),
                  this.player.setDepth(2),
                  (this.player.displayWidth = 100),
                  (this.player.scaleY = this.player.scaleX),
                  (this.stickOffsetX = 57 - this.player.displayWidth / 2),
                  (this.stickOffsetY = 82 - this.player.displayHeight / 2),
                  (this.stick = this.add
                    .line(
                      this.player.x + this.stickOffsetX,
                      this.player.y + this.stickOffsetY,
                      0,
                      0,
                      0,
                      20,
                      16777215
                    )
                    .setOrigin(0, 0)
                    .setDepth(3)
                    .setLineWidth(3)),
                  (this.hook = this.add
                    .image(
                      this.stick.x,
                      this.stick.y + this.stick.height,
                      "hook"
                    )
                    .setDepth(4)
                    .setOrigin(0.5, 0)),
                  this.hook.setDisplaySize(40, 35),
                  this.playerMovement.push(
                    this.tweens.add({
                      targets: this.player,
                      y: {
                        from: 105,
                        to: 100,
                      },
                      duration: 750,
                      ease: "Sine.easeInOut",
                      yoyo: !0,
                      repeat: -1,
                      paused: !0,
                    })
                  ),
                  (this.swipeMovement = this.tweens.add({
                    targets: this.stick,
                    angle: {
                      from: -60,
                      to: 60,
                    },
                    duration: 1500,
                    ease: "Sine.easeInOut",
                    yoyo: !0,
                    repeat: -1,
                    paused: !0,
                  })),
                  this.swipeMovement.setTimeScale(this.swipeSpeed / H),
                  this.playerMovement.push(this.swipeMovement),
                  this.prestartGame();
              },
            },
            {
              key: "prestartGame",
              value: function () {
                var t,
                  e = this;
                this.sys.sound.setVolume(0.3),
                  (this.bgm = this.sound.add("bgm", {
                    loop: !0,
                  })),
                  this.bgm.play(),
                  this.playerMovement.forEach(function (t) {
                    return t.play();
                  }),
                  (this.isAiming = !0),
                  (
                    null === (t = this.game.config.customData) || void 0 === t
                      ? void 0
                      : t.autoStart
                  )
                    ? this.startGame()
                    : this.input.once("pointerdown", function () {
                        e.startGame();
                      });
              },
            },
            {
              key: "startGame",
              value: function () {
                var t;
                this.game.events.emit("GAME_START"),
                  this.input.on("pointerdown", this.fireHook, this),
                  (this.startTime = Date.now());
                var e = Math.min(
                  null === (t = this.game.config.customData) || void 0 === t
                    ? void 0
                    : t.gameDuration,
                  45
                );
                (this.gameDuration = 1e3 * e),
                  (this.timeLeft = this.gameDuration),
                  (this.timeLeftSec = e),
                  (this.score = 0),
                  (this.data = []),
                  (this.firingPosition = null),
                  this.game.events.emit("UPDATE_TIMELEFT", this.timeLeftSec),
                  this.game.events.emit("UPDATE_SCORE", this.score),
                  (this.isPlaying = !0),
                  (this.sfxClaim = this.sound.add("sfx-claim")),
                  (this.sfxDrag = this.sound.add("sfx-drag", {
                    loop: !0,
                  })),
                  (this.sfxFire = this.sound.add("sfx-fire")),
                  (this.sfxGameOver = this.sound.add("sfx-gameover")),
                  (this.sfxHitItem = this.sound.add("sfx-hititem")),
                  (this.sfxHitTrap = this.sound.add("sfx-hittrap")),
                  (this.sfxTimeRunningOut = this.sound.add(
                    "sfx-timerunningout",
                    {
                      loop: !0,
                    }
                  ));
              },
            },
            {
              key: "fireHook",
              value: function () {
                var t = this;
                if (
                  this.isPlaying &&
                  this.isAiming &&
                  !this.isFiring &&
                  !this.isPulling
                ) {
                  (this.isFiring = !0),
                    (this.isAiming = !1),
                    this.playerMovement.forEach(function (t) {
                      return t.pause();
                    });
                  var e = this.stick.angle,
                    i =
                      this.hook.x -
                      (Math.sin(x.Phaser.Math.DegToRad(e)) * this.hook.width) /
                        2,
                    s =
                      this.hook.y +
                      (Math.cos(x.Phaser.Math.DegToRad(e)) * this.hook.height) /
                        2;
                  (this.firingPosition = {
                    x: i,
                    y: s,
                  }),
                    (this.hookBody = this.physics.add.existing(
                      this.add.circle(i, s, 16)
                    )),
                    this.hookBody.body.setCircle(16),
                    this.colliders.push(
                      this.physics.add.collider(
                        this.hookBody,
                        this.walls,
                        function () {
                          t.onHit();
                        }
                      )
                    ),
                    this.colliders.push(
                      this.physics.add.collider(
                        this.hookBody,
                        this.items,
                        function (e, i) {
                          t.onHit(i);
                        }
                      )
                    );
                  var n = {
                    x:
                      this.hookBody.x -
                      2e3 * Math.sin(x.Phaser.Math.DegToRad(e)),
                    y:
                      this.hookBody.y +
                      2e3 * Math.cos(x.Phaser.Math.DegToRad(e)),
                  };
                  this.physics.moveToObject(this.hookBody, n, 300),
                    this.sfxFire.play();
                }
              },
            },
            {
              key: "clearColliders",
              value: function () {
                this.colliders.forEach(function (t) {
                  return t.destroy();
                }),
                  (this.colliders = []);
              },
            },
            {
              key: "onHit",
              value: function (t) {
                var e = this;
                this.sfxFire.stop(),
                  this.sfxDrag.play(),
                  this.clearColliders(),
                  (this.isFiring = !1),
                  (this.isPulling = !0),
                  (this.selectedItem = t),
                  this.hook.setFrame(t ? 1 : 2);
                var i = this.stick.angle,
                  s = x.Phaser.Math.DegToRad(i),
                  n = this.stick.geom.y2 / 20;
                (this.stick.geom.y2 = 20), (this.stick.scaleY = n);
                var a = this.hook.x - this.stick.x + 20 * Math.sin(s),
                  o = this.hook.y - this.stick.y - 20 * Math.cos(s),
                  r =
                    (Math.sqrt(a * a + o * o) / ((t && t.speed) || 300)) * 1e3;
                t &&
                  (t.tween && t.tween.stop(),
                  (t.angle = i),
                  "TRAP" === t.type
                    ? this.sfxHitTrap.play()
                    : this.sfxHitItem.play(),
                  (this.twinklingStar = this.add
                    .image(t.x, t.y, "start-twinkle")
                    .setDepth(10)
                    .setAlpha(1)
                    .setScale(1 / 3)),
                  this.tweens.add({
                    targets: this.twinklingStar,
                    alpha: {
                      from: 1,
                      to: 0,
                    },
                    scale: {
                      from: 1 / 6,
                      to: 0.1,
                    },
                    duration: 600,
                    ease: "Linear",
                    yoyo: !1,
                    repeat: 0,
                    onComplete: function () {
                      var t;
                      null === (t = e.twinklingStar) ||
                        void 0 === t ||
                        t.destroy(),
                        (e.twinklingStar = null);
                    },
                  })),
                  (this.currentItem = {
                    timestamp: Date.now(),
                    hookX: this.firingPosition.x,
                    hookY: this.firingPosition.y,
                    angle: s,
                    type: t ? F[t.type].t : Math.floor(z(3)),
                    size: t ? t.size : Math.floor(z(100)),
                    itemX: t ? this.hook.x : 0,
                    itemY: t ? this.hook.y : 0,
                    level:
                      t && "BONUS" === t.type
                        ? t.size + t.pts
                        : Math.floor(z(200)),
                  }),
                  this.tweens.add({
                    targets: [this.stick],
                    scale: 1,
                    ease: "linear",
                    duration: r,
                    yoyo: !1,
                    repeat: !1,
                    onStart: function () {},
                    onComplete: function () {
                      if (
                        (e.sfxDrag.stop(), e.hook.setFrame(0), e.selectedItem)
                      ) {
                        var t = e.selectedItem.pts;
                        e.sfxClaim.play();
                        var i = e.make.text({
                          text: t >= 0 ? "+".concat(t) : t,
                          style: {
                            fontSize: "24px",
                            fontFamily: "BinancePlex",
                            color: "#fff",
                            stroke: "#000",
                            strokeThickness: 4,
                          },
                          x: e.selectedItem.x,
                          y: e.selectedItem.y - 50,
                        });
                        i.setDepth(10),
                          e.tweens.add({
                            targets: i,
                            y: {
                              getEnd: function (t) {
                                return t.y - 50;
                              },
                            },
                            alpha: 0,
                            duration: 1e3,
                            ease: "Linear",
                            onComplete: function () {
                              i.destroy();
                            },
                          }),
                          (e.score = Math.max(e.score + t, 0)),
                          e.game.events.emit("UPDATE_SCORE", e.score),
                          e.selectedItem.destroy(),
                          (e.selectedItem = null),
                          e.twinklingStar &&
                            (e.twinklingStar.destroy(),
                            (e.twinklingStar = null));
                      }
                      e.currentItem &&
                        (e.data.push(e.currentItem), (e.currentItem = null)),
                        (e.isPulling = !1),
                        (e.isFiring = !1),
                        (e.isAiming = !0),
                        e.playerMovement.forEach(function (t) {
                          return t.resume();
                        });
                    },
                  }),
                  this.hookBody && this.hookBody.destroy();
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var i = this,
                  s = x.Phaser.Math.DegToRad(this.stick.angle),
                  n = Math.sin(s),
                  a = Math.cos(s);
                if (this.isAiming) {
                  this.stick.setPosition(
                    this.player.x + this.stickOffsetX,
                    this.player.y + this.stickOffsetY
                  ),
                    (this.hook.angle = this.stick.angle);
                  var o = this.stick.x - n * this.stick.height,
                    r = this.stick.y + a * this.stick.height;
                  this.hook.setPosition(o, r);
                } else if (this.isFiring) {
                  if (this.hookBody) {
                    this.stick.geom.y2 = (this.hookBody.y - this.stick.y) / a;
                    var h = this.hookBody.x + (n * this.hookBody.width) / 2,
                      l = this.hookBody.y - (a * this.hookBody.height) / 2;
                    this.hook.setPosition(h, l);
                  }
                } else if (this.isPulling) {
                  var c =
                      this.stick.x - n * this.stick.geom.y2 * this.stick.scaleY,
                    d =
                      this.stick.y + a * this.stick.geom.y2 * this.stick.scaleY;
                  if ((this.hook.setPosition(c, d), this.selectedItem)) {
                    var u = this.selectedItem.displayWidth / 2 + 16,
                      m = this.hook.x - n * u,
                      f = this.hook.y + a * u;
                    if (
                      (this.selectedItem.setPosition(m, f), this.twinklingStar)
                    ) {
                      var p = this.selectedItem.displayWidth / 5;
                      this.twinklingStar.setPosition(m - p, f - p);
                    }
                  }
                }
                if (this.timeLeft > 0) {
                  this.timeLeft -= e;
                  var g = Date.now() - this.startTime,
                    v = this.gameDuration - g + 500;
                  v < this.timeLeft && (this.timeLeft = v);
                  var y = Math.max(0, Math.ceil(this.timeLeft / 1e3));
                  y !== this.timeLeftSec &&
                    ((this.timeLeftSec = y),
                    this.game.events.emit("UPDATE_TIMELEFT", this.timeLeftSec),
                    this.timeLeftSec > 1 &&
                      this.timeLeftSec <= 10 &&
                      (this.isLate ||
                        ((this.isLate = !0),
                        this.sfxTimeRunningOut.play(),
                        this.swipeMovement.setTimeScale(
                          this.swipeSpeedLate / H
                        ))),
                    1 === this.timeLeftSec &&
                      (this.sfxTimeRunningOut.stop(), this.sfxGameOver.play())),
                    this.timeLeft <= 0 &&
                      (this.sys.pause(),
                      (this.isPlaying = !1),
                      this.playerMovement.forEach(function (t) {
                        return t.pause();
                      }),
                      setTimeout(function () {
                        i.game.events.emit("GAME_END", {
                          score: i.score,
                          data: i.data,
                        });
                      }, 1e3));
                }
              },
            },
          ]),
          i
        );
      })(x.Phaser.Scene);
      const X = function (t) {
        var e = t.percent,
          i = void 0 === e ? 100 : e;
        return (0, c.jsxs)(E.A, {
          className:
            "absolute flex-col justify-center items-center w-full h-full gap-[60px]",
          children: [
            (0, c.jsx)(L.A, {
              src: (0, C.VG)("loading-kv.png"),
              className: "w-[145px]",
            }),
            (0, c.jsxs)(E.A, {
              className: "gap-3 items-center ps-4",
              children: [
                (0, c.jsx)(T.Ay, {
                  className: "pt-[6px]",
                  children: (0, c.jsx)(T.Ay, {
                    className:
                      "relative bg-ToastBg w-[160px] h-2 rounded-full overflow-hidden",
                    children: (0, c.jsx)(T.Ay, {
                      className:
                        "absolute bg-textBrand top-0 left-0 right-0 bottom-0",
                      style: {
                        width: "".concat(i, "%"),
                      },
                    }),
                  }),
                }),
                (0, c.jsxs)(T.Ay, {
                  className: "flex-none w-8",
                  children: [Math.floor(i), "%"],
                }),
              ],
            }),
          ],
        });
      };
      var W = i("0CAK"),
        V = function (t) {
          var e = t.text,
            i = t.iconName,
            s = t.top;
          return (0, c.jsxs)(E.A, {
            className:
              "bg-bg1 absolute end-0 gap-2 w-[111px] h-[40px] py-[8px] pl-[12px] items-center pointer-events-none",
            style: {
              borderStartStartRadius: "30px",
              borderEndStartRadius: "30px",
              top: s,
            },
            children: [
              (0, c.jsx)(L.A, {
                src: (0, C.VG)(i),
                className: "w-[24px] h-[24px] flex-none",
              }),
              (0, c.jsx)(T.Ay, {
                className: "t-subtitle4 flex-1",
                children: e,
              }),
            ],
          });
        },
        Q = function (t) {
          var e = t.showTutorial,
            i = t.onGameStart,
            s = t.onGameEnd,
            n = (0, m.B)().t,
            a = (0, d.useState)(!0),
            o = a[0],
            r = a[1],
            h = (0, x.useEventEmitter)("TOGGLE_SOUND"),
            l = (0, D._)(),
            u = l.isSoundOn,
            f = l.toggleSoundOn,
            p = l.toggleSoundOff,
            g = (0, d.useState)(0),
            v = g[0],
            y = g[1],
            A = (0, d.useState)(null),
            k = A[0],
            E = A[1],
            L = (0, d.useState)(null),
            M = L[0],
            b = L[1],
            P = (0, d.useCallback)(function (t) {
              y(t);
            }, []),
            O = (0, d.useCallback)(
              function () {
                h(u), r(!1);
              },
              [h]
            );
          (0, x.useEventListener)("LOAD_PROGRESS", P),
            (0, x.useEventListener)("LOAD_COMPLETE", O),
            (0, x.useEventListener)("GAME_START", i),
            (0, x.useEventListener)("UPDATE_TIMELEFT", E),
            (0, x.useEventListener)("UPDATE_SCORE", b),
            (0, x.useEventListener)("GAME_END", s);
          var C = (0, d.useCallback)(
              function () {
                p(), h(!1);
              },
              [h, p]
            ),
            R = (0, d.useCallback)(
              function () {
                f(), h(!0);
              },
              [h, f]
            );
          return o
            ? (0, c.jsx)(X, {
                percent: Math.max(10, 100 * v),
              })
            : (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)(T.Ay, {
                    className: "absolute top-0 start-0 px-4 py-3",
                    children: u
                      ? (0, c.jsx)(w, {
                          className: "w-6 h-6",
                          onClick: C,
                        })
                      : (0, c.jsx)(S, {
                          className: "w-6 h-6",
                          onClick: R,
                        }),
                  }),
                  null !== k &&
                    (0, c.jsx)(V, {
                      text: "".concat(k, " s"),
                      iconName: "icon-timer.png",
                      top: "8px",
                    }),
                  null !== M &&
                    (0, c.jsx)(V, {
                      text: M,
                      iconName: "icon-score.png",
                      top: "64px",
                    }),
                  e &&
                    (0, c.jsx)(T.Ay, {
                      className:
                        "absolute top-[200px] start-0 w-full px-4 text-center pointer-events-none",
                      children: n("crypto-miner-tutorial"),
                    }),
                ],
              });
        },
        K = {
          resize: !1,
        };
      const q = function (t) {
        var e = t.onGameEnd,
          i = (0, O.jc)().webApp,
          h = (0, P.U)(),
          u = h.activity,
          m = h.updateUserInfo,
          f = (0, b.T)().postStartGame,
          p = (0, d.useState)(!0),
          A = p[0],
          k = p[1],
          w = (0, d.useState)(null),
          S = w[0],
          E = w[1],
          T = (function () {
            var t = (0, g.Z)().pushNotify;
            return {
              notify: (0, d.useCallback)(
                function (e) {
                  var i = e.variant,
                    s = e.title,
                    a = void 0 === s ? null : s,
                    r = e.message,
                    h = void 0 === r ? null : r,
                    l = (0, o.A)(e, ["variant", "title", "message"]);
                  t(
                    (0, n.A)(
                      {
                        icon: v(i),
                        title: a,
                        message: h,
                      },
                      l
                    )
                  );
                },
                [t]
              ),
            };
          })().notify,
          D = (0, d.useState)({}),
          R = D[0],
          _ = D[1],
          N = (0, r.A)((0, y.M)("moonbix_has_played", !1), 2),
          I = N[0],
          G = N[1],
          j = (0, d.useCallback)(
            function () {
              G(!0);
            },
            [G]
          ),
          B = (0, d.useCallback)(
            function (t) {
              e(
                (0, a.A)((0, n.A)({}, t), {
                  gameTag: null === S || void 0 === S ? void 0 : S.gameTag,
                })
              );
            },
            [S, e]
          );
        (0, d.useEffect)(function () {
          (0, C.Rk)("game_page");
        }, []),
          (0, d.useEffect)(function () {
            if (!M.db) {
              var t = new URLSearchParams(window.location.search),
                e = {};
              ["hook", "hookFinal", "reward", "trap", "bonus"].forEach(
                function (i) {
                  var s = t.get("".concat(i, "Speed"));
                  if (s) {
                    var n = parseInt(s);
                    Number.isInteger(n) &&
                      n > 0 &&
                      (T({
                        message: "Set "
                          .concat(i, " speed to ")
                          .concat(n, " px/s"),
                      }),
                      (e["TEST_".concat(i.toUpperCase(), "_SPEED")] = n));
                  }
                }
              ),
                _(e);
            }
          }, []),
          (0, d.useEffect)(function () {
            var t = (function () {
              var t = (0, s.A)(
                l().mark(function t() {
                  var e;
                  return l().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            f({
                              resourceId:
                                null === u || void 0 === u ? void 0 : u.id,
                            })
                          );
                        case 2:
                          if (!(e = t.sent).success) {
                            t.next = 8;
                            break;
                          }
                          return E(e.data), k(!1), (t.next = 8), m();
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          }, []),
          (0, d.useEffect)(
            function () {
              var t = function () {
                (0, C.Rk)("game_page_quit");
              };
              return (
                window.addEventListener("beforeunload", t),
                function () {
                  window.removeEventListener("beforeunload", t);
                }
              );
            },
            [i]
          );
        var F = (0, d.useMemo)(
            function () {
              var t,
                e,
                s =
                  (null === i || void 0 === i ? void 0 : i.viewportWidth) ||
                  (null === document ||
                  void 0 === document ||
                  null === (t = document.body) ||
                  void 0 === t
                    ? void 0
                    : t.clientWidth) ||
                  (null === window || void 0 === window
                    ? void 0
                    : window.innerWidth),
                n =
                  (null === i || void 0 === i ? void 0 : i.viewportHeight) ||
                  (null === document ||
                  void 0 === document ||
                  null === (e = document.body) ||
                  void 0 === e
                    ? void 0
                    : e.clientHeight) ||
                  (null === window || void 0 === window
                    ? void 0
                    : window.innerHeight);
              return {
                width: Math.min(s, 767),
                height: n,
              };
            },
            [i]
          ),
          H = F.width,
          z = F.height,
          U = (0, d.useMemo)(
            function () {
              var t =
                  (null === S || void 0 === S ? void 0 : S.cryptoMinerConfig) ||
                  {},
                e = t.gameDuration,
                i = (0, o.A)(t, ["gameDuration"]);
              return {
                transparent: !0,
                scene: Y,
                physics: {
                  default: "arcade",
                  arcade: {
                    debug: !M.db && /debug/.test(window.location.search),
                  },
                },
                scale: {
                  mode: x.Phaser.Scale.FIT,
                  width: H * (800 / z),
                  height: 800,
                },
                customData: (0, n.A)(
                  {
                    autoStart: !!I,
                    gameDuration: e || 45,
                  },
                  i || null,
                  R
                ),
              };
            },
            [S, H, z]
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(L.A, {
              src: (0, C.VG)("star-purple.gif"),
              className: "".concat(W.A.star, " ").concat(W.A["star--purple"]),
            }),
            (0, c.jsx)(L.A, {
              src: (0, C.VG)("star-blue.gif"),
              className: "".concat(W.A.star, " ").concat(W.A["star--blue"]),
            }),
            A
              ? (0, c.jsx)(X, {
                  percent: 10,
                })
              : (0, c.jsx)(x.PhaserGame, {
                  sx: {
                    minWidth: "auto",
                  },
                  config: U,
                  options: K,
                  children: (0, c.jsx)(Q, {
                    showTutorial: !I,
                    onGameStart: j,
                    onGameEnd: B,
                  }),
                }),
          ],
        });
      };
    },
    amiU: (t, e, i) => {
      var s = i("wC3K"),
        n = i("pPzx");
      t.exports = function (t, e, i) {
        ((void 0 !== i && !n(t[e], i)) || (void 0 === i && !(e in t))) &&
          s(t, e, i);
      };
    },
    MzY2: (t, e, i) => {
      var s = i("HsnV"),
        n = i("amiU"),
        a = i("UdtX"),
        o = i("cb1R"),
        r = i("tQYX"),
        h = i("zH+d"),
        l = i("LL3N");
      t.exports = function t(e, i, c, d, u) {
        e !== i &&
          a(
            i,
            function (a, h) {
              if ((u || (u = new s()), r(a))) o(e, i, h, c, t, d, u);
              else {
                var m = d ? d(l(e, h), a, h + "", e, i, u) : void 0;
                void 0 === m && (m = a), n(e, h, m);
              }
            },
            h
          );
      };
    },
    cb1R: (t, e, i) => {
      var s = i("amiU"),
        n = i("Grae"),
        a = i("6Rtw"),
        o = i("QT01"),
        r = i("sD1O"),
        h = i("bvyN"),
        l = i("wxYD"),
        c = i("Ndl3"),
        d = i("3ajY"),
        u = i("2q8g"),
        m = i("tQYX"),
        f = i("Kkar"),
        p = i("Qd2C"),
        g = i("LL3N"),
        v = i("4ScB");
      t.exports = function (t, e, i, y, x, A, k) {
        var w = g(t, i),
          S = g(e, i),
          E = k.get(S);
        if (E) s(t, i, E);
        else {
          var L = A ? A(w, S, i + "", t, e, k) : void 0,
            T = void 0 === L;
          if (T) {
            var M = l(S),
              b = !M && d(S),
              D = !M && !b && p(S);
            (L = S),
              M || b || D
                ? l(w)
                  ? (L = w)
                  : c(w)
                  ? (L = o(w))
                  : b
                  ? ((T = !1), (L = n(S, !0)))
                  : D
                  ? ((T = !1), (L = a(S, !0)))
                  : (L = [])
                : f(S) || h(S)
                ? ((L = w), h(w) ? (L = v(w)) : (m(w) && !u(w)) || (L = r(S)))
                : (T = !1);
          }
          T && (k.set(S, L), x(L, S, y, A, k), k.delete(S)), s(t, i, L);
        }
      };
    },
    R3TX: (t, e, i) => {
      var s = i("zWgn"),
        n = i("UAs9"),
        a = i("7Pat");
      t.exports = function (t, e) {
        return a(n(t, e, s), t + "");
      };
    },
    wpQC: (t, e, i) => {
      var s = i("R3TX"),
        n = i("R5u7");
      t.exports = function (t) {
        return s(function (e, i) {
          var s = -1,
            a = i.length,
            o = a > 1 ? i[a - 1] : void 0,
            r = a > 2 ? i[2] : void 0;
          for (
            o = t.length > 3 && "function" == typeof o ? (a--, o) : void 0,
              r && n(i[0], i[1], r) && ((o = a < 3 ? void 0 : o), (a = 1)),
              e = Object(e);
            ++s < a;

          ) {
            var h = i[s];
            h && t(e, h, s, o);
          }
          return e;
        });
      };
    },
    R5u7: (t, e, i) => {
      var s = i("pPzx"),
        n = i("9y2L"),
        a = i("pnw1"),
        o = i("tQYX");
      t.exports = function (t, e, i) {
        if (!o(i)) return !1;
        var r = typeof e;
        return (
          !!("number" == r
            ? n(i) && a(e, i.length)
            : "string" == r && e in i) && s(i[e], t)
        );
      };
    },
    LL3N: (t) => {
      t.exports = function (t, e) {
        if (
          ("constructor" !== e || "function" !== typeof t[e]) &&
          "__proto__" != e
        )
          return t[e];
      };
    },
    Ndl3: (t, e, i) => {
      var s = i("9y2L"),
        n = i("tLQN");
      t.exports = function (t) {
        return n(t) && s(t);
      };
    },
    H8sf: (t, e, i) => {
      var s = i("MzY2"),
        n = i("wpQC")(function (t, e, i) {
          s(t, e, i);
        });
      t.exports = n;
    },
    "4ScB": (t, e, i) => {
      var s = i("LtXa"),
        n = i("zH+d");
      t.exports = function (t) {
        return s(t, n(t));
      };
    },
  },
]);
//# debugId=27e04049-7494-5674-99c7-6b36b5a8a227
