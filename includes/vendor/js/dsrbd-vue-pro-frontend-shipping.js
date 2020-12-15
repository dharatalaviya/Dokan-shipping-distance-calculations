! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var a = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(o, a, function(e) {
                return t[e]
            }.bind(null, a));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 77)
}({
    0: function(t, e, n) {
        "use strict";

        function o(t, e, n, o, a, i, s, r) {
            var d, c = "function" == typeof t ? t.options : t;
            if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), o && (c.functional = !0), i && (c._scopeId = "data-v-" + i), s ? (d = function(t) {
                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), a && a.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s)
                }, c._ssrRegister = d) : a && (d = r ? function() {
                    a.call(this, this.$root.$options.shadowRoot)
                } : a), d)
                if (c.functional) {
                    c._injectStyles = d;
                    var p = c.render;
                    c.render = function(t, e) {
                        return d.call(e), p(t, e)
                    }
                } else {
                    var l = c.beforeCreate;
                    c.beforeCreate = l ? [].concat(l, d) : [d]
                } return {
                exports: t,
                options: c
            }
        }
        n.d(e, "a", (function() {
            return o
        }))
    },
    38: function(t, e, n) {
        "use strict";
        var o = n(5);
        n.n(o).a
    },
    39: function(t, e, n) {
        "use strict";
        var o = n(6);
        n.n(o).a
    },
    40: function(t, e, n) {
        "use strict";
        var o = n(7);
        n.n(o).a
    },
    5: function(t, e, n) {},
    6: function(t, e, n) {},
    7: function(t, e, n) {},
    77: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
                name: "shipping",
                data: function() {
                    return {}
                }
            },
            a = n(0),
            i = Object(a.a)(o, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    attrs: {
                        id: "dokan-shipping-zone"
                    }
                }, [e("router-view")], 1)
            }), [], !1, null, "1ddd30dc", null).exports,
            s = {
                name: "Main",
                data: function() {
                    return {
                        shippingZone: {}
                    }
                },
                methods: {
                    getShippingMethod: function(t) {
                        var e = [];
                        return Object.keys(t).forEach((function(n) {
                            var o = '<span class="' + ("yes" == t[n].enabled ? "is-enabled" : "is-disabled") + '">' + t[n].title + "</span>";
                            e.push(o)
                        })), e.join(", ")
                    },
                    fetchShippingZone: function() {
                        var t = this,
                            e = {
                                action: "dokan-get-shipping-zone",
                                nonce: dokan.nonce
                            };
                        jQuery("#dokan-shipping-zone").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.shippingZone = e.data, jQuery("#dokan-shipping-zone").unblock()) : (jQuery("#dokan-shipping-zone").unblock(), alert(e.data))
                        }))
                    }
                },
                created: function() {
                    this.fetchShippingZone()
                }
            },
            r = (n(38), Object(a.a)(s, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "shipping-zone"
                }, [n("table", {
                    staticClass: "dokan-table shipping-zone-table"
                }, [n("thead", [n("tr", [n("th", [t._v(t._s(t.__("Zone Name", "dokan")))]), t._v(" "), n("th", [t._v(t._s(t.__("Region(s)", "dokan")))]), t._v(" "), n("th", [t._v(t._s(t.__("Shipping Method", "dokan")))])])]), t._v(" "), n("tbody", [Object.keys(t.shippingZone).length > 0 ? t._l(t.shippingZone, (function(e) {
                    return n("tr", [n("td", [n("router-link", {
                        attrs: {
                            to: {
                                name: "Zone",
                                params: {
                                    zoneID: e.zone_id
                                }
                            }
                        }
                    }, [t._v(t._s(e.zone_name))]), t._v(" "), n("div", {
                        staticClass: "row-actions"
                    }, [n("router-link", {
                        attrs: {
                            to: {
                                name: "Zone",
                                params: {
                                    zoneID: e.zone_id
                                }
                            }
                        }
                    }, [t._v(t._s(t.__("Edit", "dokan")))])], 1)], 1), t._v(" "), n("td", [t._v("\n                        " + t._s(e.formatted_zone_location) + "\n                    ")]), t._v(" "), n("td", [t.getShippingMethod(e.shipping_methods) ? n("p", {
                        domProps: {
                            innerHTML: t._s(t.getShippingMethod(e.shipping_methods))
                        }
                    }) : n("p", [n("span", [t._v(t._s(t.__("No method found", "dokan")) + " ")]), t._v(" "), n("router-link", {
                        attrs: {
                            to: {
                                name: "Zone",
                                params: {
                                    zoneID: e.zone_id
                                }
                            }
                        }
                    }, [t._v(" " + t._s(t.__("Add Shipping Method", "dokan")))])], 1)])])
                })) : [n("tr", [n("td", {
                    attrs: {
                        colspan: "3"
                    }
                }, [t._v(t._s(t.__("No shipping zone found for configuration. Please contact the admin to manage your store's shipping", "dokan")))])])]], 2)])])
            }), [], !1, null, null, null).exports),
            d = {
                name: "Zone",
                components: {
                    Switches: dokan_get_lib("Switches"),
                    Modal: dokan_get_lib("Modal"),
                    Multiselect: dokan_get_lib("Multiselect")
                },
                data: function() {
                    return {
                        successMessage: "",
                        showAddShippingMethodModal: !1,
                        editShippingMethodModal: !1,
                        wantToLimitLocation: !1,
                        zone: {
                            data: {
                                zone_name: ""
                            },
                            formatted_zone_location: ""
                        },
                        state: [],
                        country: [],
                        postcode: [],
                        showCountryList: !1,
                        showStateList: !1,
                        showPostCodeList: !1,
                        stateList: [],
                        countryList: [],
                        zoneShippingMethod: {},
                        shipping_method: "",
                        editShippingMethodData: {
                            method_id: "",
                            instance_id: "0",
                            settings: {

                            }
                        },
                        cost_description: this.__("Enter a cost (excl. tax) or sum, e.g. <code>10.00 * [qty]</code>. Use <code>[qty]</code> for the number of items, <code>[cost]</code> for the total cost of items, and <code>[fee percent='10' min_fee='20' max_fee='']</code> for percentage based fees.", "dokan"),
                        editShippingMethodTitle: this.__("Edit Shipping Method", "dokan"),
                        postCodeTitle: this.__("Postcodes need to be comma separated", "dokan")
                    }
                },
                computed: {
                    zoneLocation: function() {
                        return _.groupBy(this.zone.data.zone_locations, "type")
                    },
                    showLimitLocationLink: function() {
                        return void 0 === this.zoneLocation.postcode
                    },
                    shippingClasses: function() {
                        return dokanShipping.shipping_class
                    }
                },
                methods: {
                    wantToSetLocation: function() {
                        this.wantToLimitLocation = !this.wantToLimitLocation
                    },
                    onSwitch: function(t, e) {
                        var n = this,
                            o = {
                                action: "dokan-toggle-shipping-method-enabled",
                                zoneID: n.$route.params.zoneID,
                                instance_id: e,
                                checked: t,
                                nonce: dokan.nonce
                            };
                        jQuery(".zone-method-wrapper").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, o, (function(t) {
                            t.success ? (n.successMessage = t.data, jQuery(".zone-method-wrapper").unblock(), setTimeout((function() {
                                n.successMessage = ""
                            }), 2e3)) : (jQuery(".zone-method-wrapper").unblock(), alert(t.data))
                        }))
                    },
                    saveZoneSettings: function() {
                        var t = this,
                            e = {
                                action: "dokan-save-zone-settings",
                                country: t.wantToLimitLocation ? t.country : [],
                                state: t.wantToLimitLocation ? t.state : [],
                                postcode: t.wantToLimitLocation ? t.postcode : "",
                                zoneID: t.$route.params.zoneID,
                                nonce: dokan.nonce
                            };
                        jQuery("#dokan-shipping-zone").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.successMessage = e.data, jQuery("#dokan-shipping-zone").unblock()) : (jQuery("#dokan-shipping-zone").unblock(), alert(e.data))
                        }))
                    },
                    editShippingMethod: function(t) {
                        this.editShippingMethodData = {
                            instance_id: t.instance_id,
                            method_id: t.id,
                            settings: t.settings

                        }, this.editShippingMethodModal = !0
                    },
                    deleteShippingMethod: function(t) {
                        var e = this,
                            n = {
                                action: "dokan-delete-shipping-method",
                                zoneID: e.$route.params.zoneID,
                                instance_id: t.instance_id,
                                nonce: dokan.nonce
                            };
                        jQuery(".zone-method-wrapper").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, n, (function(t) {
                            t.success ? (e.fetchZone(), e.successMessage = t.data, jQuery(".zone-method-wrapper").unblock()) : (jQuery(".zone-method-wrapper").unblock(), alert(t.data))
                        }))
                    },
                    updateShippingMethodSettings: function() { 
                        var minvalue = jQuery("input[name='range[][min]']").map(function(){return jQuery(this).val();}).get();
                        var maxvalue = jQuery("input[name='range[][max]']").map(function(){return jQuery(this).val();}).get();
                        var ratevalue = jQuery("input[name='range[][rate]']").map(function(){return jQuery(this).val();}).get();
                        var range = [];
                        for(var i=0; i<= minvalue.length;i++){
                            var r = []; 
                            r.push(minvalue[i]);
                            r.push(maxvalue[i]);
                            r.push(ratevalue[i]);
                            range.push(r);
                        }
                       
                        this.editShippingMethodData.settings.range= range;
                        var t = this,
                        e = {
                                action: "dokan-update-shipping-method-settings",
                                data: t.editShippingMethodData,
                                zoneID: t.$route.params.zoneID,
                                nonce: dokan.nonce
                            };
                        jQuery(".zone-method-wrapper").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.fetchZone(), t.editShippingMethodModal = !1, jQuery(".zone-method-wrapper").unblock()) : (jQuery(".zone-method-wrapper").unblock(), alert(e.data))
                        }))
                    },
                    getStatesFromCountry: function(t) {
                        var e = [];
                        return _.each(t, (function(t) {
                            if (void 0 !== dokanShipping.states[t]) {
                                var n = Object.keys(dokanShipping.states[t]).map((function(e) {
                                    return {
                                        code: t + ":" + e,
                                        name: dokanShipping.states[t][e]
                                    }
                                }));
                                e = e.concat(e, n)
                            }
                        })), e
                    },
                    getCountryFromContinent: function(t) {
                        var e = [];
                        return _.each(t, (function(t) {
                            e = e.concat(dokanShipping.continents[t].countries)
                        })), e.map((function(t) {
                            return {
                                code: t,
                                name: dokanShipping.allowed_countries[t]
                            }
                        }))
                    },
                    setStateForChosenCountry: function(t, e) {
                        var n = _.pluck(t, "code");
                        this.stateList = this.getStatesFromCountry(n)
                    },
                    fetchZone: function() {
                        var t = this,
                            e = {
                                action: "dokan-get-shipping-zone",
                                zoneID: t.$route.params.zoneID,
                                nonce: dokan.nonce
                            };
                        jQuery("#dokan-shipping-zone").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            if (e.success) {
                                t.zone = e.data, t.zoneShippingMethod = e.data.shipping_methods, t.zone.locations.length < 1 && (t.zone.locations = e.data.data.zone_locations);
                                var n = Object.keys(t.zoneLocation);
                                if (n.indexOf("postcode") < 0)
                                    if (n.indexOf("state") >= 0) t.showPostCodeList = !0;
                                    else if (n.indexOf("country") >= 0) {
                                    t.showStateList = !0, t.showPostCodeList = !0;
                                    var o = _.pluck(t.zoneLocation.country, "code");
                                    t.stateList = t.getStatesFromCountry(o)
                                } else if (n.indexOf("continent") >= 0) {
                                    t.showCountryList = !0, t.showStateList = !0, t.showPostCodeList = !0;
                                    var a = _.pluck(t.zoneLocation.continent, "code");
                                    t.countryList = t.getCountryFromContinent(a)
                                }
                                if (e.data.locations.length > 0) {
                                    var i = _.groupBy(e.data.locations, "type");
                                    (Object.keys(i).includes("state") || Object.keys(i).includes("postcode")) && (t.wantToLimitLocation = !0), Object.keys(i).forEach((function(e) {
                                        "country" == e ? t.country = i[e].map((function(t) {
                                            return {
                                                code: t.code,
                                                name: dokanShipping.allowed_countries[t.code]
                                            }
                                        })) : "state" == e ? t.state = i[e].map((function(t) {
                                            var e = t.code.split(":");
                                            return {
                                                code: t.code,
                                                name: dokanShipping.states[e[0]][e[1]]
                                            }
                                        })) : "postcode" == e && (t.postcode = _.pluck(i[e], "code").join(","), void 0 !== t.zoneLocation.postcode && (t.postcode = _.pluck(t.zoneLocation.postcode, "code").join(",")))
                                    }))
                                }
                                jQuery("#dokan-shipping-zone").unblock()
                            } else jQuery("#dokan-shipping-zone").unblock(), alert(e.data)
                        }))
                    },
                    addNewMethod: function() {
                        var t = this,
                            e = {
                                action: "dokan-add-shipping-method",
                                zoneID: t.$route.params.zoneID,
                                nonce: dokan.nonce,
                                method: t.shipping_method
                            };
                        jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.fetchZone(), t.showAddShippingMethodModal = !1, t.successMessage = e.data) : alert(e.data)
                        }))
                    }
                },
                created: function() {
                    this.fetchZone()
                },
                
            },
            c = (n(39), Object(a.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "zone-component"
                }, [t.successMessage ? n("div", {
                    staticClass: "dokan-alert dokan-alert-success"
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.successMessage)
                    }
                }), t._v(" "), n("a", {
                    staticClass: "dokan-close",
                    attrs: {
                        "data-dismiss": "alert"
                    }
                }, [t._v("×")])]) : t._e(), t._v(" "), n("form", {
                    attrs: {
                        action: "",
                        method: "post"
                    }
                }, [n("div", {
                    staticClass: "dokan-form-group dokan-clearfix"
                }, [n("label", {
                    staticClass: "dokan-w4 dokan-control-label dokan-text-right",
                    attrs: {
                        for: ""
                    }
                }, [t._v("\n                " + t._s(t.__("Zone Name", "dokan")) + " :\n            ")]), t._v(" "), n("div", {
                    staticClass: "dokan-w5 dokan-text-left"
                }, [t._v("\n                " + t._s(t.zone.data.zone_name) + "\n            ")])]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group dokan-clearfix"
                }, [n("label", {
                    staticClass: "dokan-w4 dokan-control-label dokan-text-right",
                    attrs: {
                        for: ""
                    }
                }, [t._v("\n                " + t._s(t.__("Zone Location", "dokan")) + " :\n            ")]), t._v(" "), n("div", {
                    staticClass: "dokan-w5 dokan-text-left"
                }, [n("p", [t._v(t._s(t.zone.formatted_zone_location))]), t._v(" "), t.showLimitLocationLink && 0 != this.$route.params.zoneID ? n("a", {
                    staticClass: "limit-location-link",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.wantToSetLocation(e)
                        }
                    }
                }, [n("switches", {
                    attrs: {
                        enabled: t.wantToLimitLocation
                    },
                    on: {
                        input: t.wantToSetLocation
                    }
                }), t._v(" "), n("span", [t._v(t._s(t.__("Limit your zone location", "dokan")))])], 1) : t._e()])]), t._v(" "), t.wantToLimitLocation && t.showCountryList ? n("div", {
                    staticClass: "dokan-form-group dokan-clearfix"
                }, [n("label", {
                    staticClass: "dokan-w4 dokan-control-label dokan-text-right"
                }, [t._v("\n                " + t._s(t.__("Select Country", "dokan")) + "\n            ")]), t._v(" "), n("div", {
                    staticClass: "dokan-w5 dokan-text-left"
                }, [n("multiselect", {
                    attrs: {
                        options: t.countryList,
                        placeholder: t.__("Select Country", "dokan"),
                        multiple: !0,
                        label: "name",
                        "track-by": "code"
                    },
                    on: {
                        input: t.setStateForChosenCountry
                    },
                    scopedSlots: t._u([{
                        key: "option",
                        fn: function(e) {
                            return [n("span", {
                                domProps: {
                                    innerHTML: t._s(e.option.name)
                                }
                            })]
                        }
                    }, {
                        key: "tag",
                        fn: function(e) {
                            return [n("span", {
                                staticClass: "multiselect__tag"
                            }, [n("span", {
                                domProps: {
                                    innerHTML: t._s(e.option.name)
                                }
                            }), t._v(" "), n("i", {
                                staticClass: "multiselect__tag-icon",
                                attrs: {
                                    "aria-hidden": "true",
                                    tabindex: "1"
                                },
                                on: {
                                    keydown: function(n) {
                                        return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : (n.preventDefault(), e.remove(e.option))
                                    },
                                    mousedown: function(t) {
                                        return t.preventDefault(), e.remove(e.option)
                                    }
                                }
                            })])]
                        }
                    }], null, !1, 472926898),
                    model: {
                        value: t.country,
                        callback: function(e) {
                            t.country = e
                        },
                        expression: "country"
                    }
                })], 1)]) : t._e(), t._v(" "), t.wantToLimitLocation && t.showStateList && t.stateList.length ? n("div", {
                    staticClass: "dokan-form-group dokan-clearfix"
                }, [n("label", {
                    staticClass: "dokan-w4 dokan-control-label dokan-text-right",
                    attrs: {
                        for: ""
                    }
                }, [t._v("\n                " + t._s(t.__("Select States", "dokan")) + "\n            ")]), t._v(" "), n("div", {
                    staticClass: "dokan-w5 dokan-text-left"
                }, [n("multiselect", {
                    attrs: {
                        options: t.stateList,
                        placeholder: t.__("Select States", "dokan"),
                        multiple: !0,
                        label: "name",
                        "track-by": "code"
                    },
                    scopedSlots: t._u([{
                        key: "option",
                        fn: function(e) {
                            return [n("span", {
                                domProps: {
                                    innerHTML: t._s(e.option.name)
                                }
                            })]
                        }
                    }, {
                        key: "tag",
                        fn: function(e) {
                            return [n("span", {
                                staticClass: "multiselect__tag"
                            }, [n("span", {
                                domProps: {
                                    innerHTML: t._s(e.option.name)
                                }
                            }), t._v(" "), n("i", {
                                staticClass: "multiselect__tag-icon",
                                attrs: {
                                    "aria-hidden": "true",
                                    tabindex: "1"
                                },
                                on: {
                                    keydown: function(n) {
                                        return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : (n.preventDefault(), e.remove(e.option))
                                    },
                                    mousedown: function(t) {
                                        return t.preventDefault(), e.remove(e.option)
                                    }
                                }
                            })])]
                        }
                    }], null, !1, 472926898),
                    model: {
                        value: t.state,
                        callback: function(e) {
                            t.state = e
                        },
                        expression: "state"
                    }
                })], 1)]) : t._e(), t._v(" "), t.wantToLimitLocation && t.showPostCodeList ? n("div", {
                    staticClass: "dokan-form-group dokan-clearfix"
                }, [n("label", {
                    staticClass: "dokan-w4 dokan-control-label dokan-text-right",
                    attrs: {
                        for: ""
                    }
                }, [t._v("\n                " + t._s(t.__("Set your postcode", "dokan")) + " "), n("i", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "fa fa-question-circle",
                    attrs: {
                        title: t.postCodeTitle
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "dokan-w5 dokan-text-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.postcode,
                        expression: "postcode"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        name: "zone_postcode",
                        id: "zone_postcode"
                    },
                    domProps: {
                        value: t.postcode
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.postcode = e.target.value)
                        }
                    }
                })])]) : t._e(), t._v(" "), n("div", {
                    staticClass: "dokan-edit-row zone-method-wrapper"
                }, [n("div", {
                    staticClass: "dokan-section-heading",
                    attrs: {
                        "data-togglehandler": "dokan_product_inventory"
                    }
                }, [n("h2", [n("i", {
                    staticClass: "fa fa-truck",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), t._v(" " + t._s(t.__("Shipping Method", "dokan")))]), t._v(" "), n("p", [t._v(t._s(t.__("Add your shipping method for appropiate zone", "dokan")))]), t._v(" "), n("div", {
                    staticClass: "dokan-clearfix"
                })]), t._v(" "), n("div", {
                    staticClass: "dokan-section-content"
                }, [n("table", {
                    staticClass: "dokan-table zone-method-table"
                }, [n("thead", [n("tr", [n("th", {
                    staticClass: "title"
                }, [t._v(t._s(t.__("Method Title", "dokan")))]), t._v(" "), n("th", {
                    staticClass: "enabled"
                }, [t._v(t._s(t.__("Status", "dokan")))]), t._v(" "), n("th", {
                    staticClass: "description"
                }, [t._v(t._s(t.__("Description", "dokan")))])])]), t._v(" "), n("tbody", 
                [Object.keys(t.zoneShippingMethod).length ? t._l(t.zoneShippingMethod, (function(e) {
                    return n("tr", [n("td", [t._v("\n " + t._s(e.title) + "\n "), n("div", {
                        staticClass: "row-actions"
                    }, [n("span", {
                        staticClass: "edit"
                    }, [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(n) {

                                return n.preventDefault(), t.editShippingMethod(e)
                            }
                        }
                    }, [t._v(t._s(t.__("Edit", "dokan")))]), t._v(" | ")]), t._v(" "), n("span", {
                        staticClass: "delete"
                    }, [n("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(n) {
                                return n.preventDefault(), t.deleteShippingMethod(e)
                            }
                        }
                    }, [t._v(t._s(t.__("Delete", "dokan")))])])])]), t._v(" "), n("td", [n("switches", {
                        attrs: {
                            enabled: "yes" == e.enabled,
                            value: e.instance_id
                        },
                        on: {
                            input: t.onSwitch
                        }
                    })], 1), t._v(" "), n("td", [t._v("\n" + t._s(e.settings.description) + "\n                                ")])])
                })) : [n("tr", [n("td", {
                    attrs: {
                        colspan: "3"
                    }
                }, [t._v("\n " + t._s(t.__("No method found", "dokan")) + "\n                                ")])])]], 2)])]), t._v(" "), n("div", {
                    staticClass: "dokan-section-footer"
                }, [n("a", {
                    staticClass: "dokan-btn dokan-btn-theme",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.showAddShippingMethodModal = !0
                        }
                    }
                }, [n("i", {
                    staticClass: "fa fa-plus"
                }), t._v(" " + t._s(t.__("Add Shipping Method", "dokan")))])])]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "Main"
                        }
                    }
                }, [t._v(t._s(t.__("← Back to Zone List", "dokan")))]), t._v(" "), n("input", {
                    staticClass: "dokan-btn dokan-btn-theme dokan-right",
                    attrs: {
                        type: "submit"
                    },
                    domProps: {
                        value: t.__("Save Changes", "dokan")
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.saveZoneSettings(e)
                        }
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "dokan-clearfix"
                })]), t._v(" "), t.showAddShippingMethodModal ? n("modal", {
                    attrs: {
                        title: t.__("Add Shipping Method", "dokan")
                    },
                    on: {
                        close: function(e) {
                            t.showAddShippingMethodModal = !1
                        }
                    }
                }, [n("template", {
                    slot: "body"
                }, [n("p", [t._v(t._s(t.__("Choose the shipping method you wish to add. Only shipping methods which support zones are listed.", "dokan")))]), t._v(" "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.shipping_method,
                        expression: "shipping_method"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        model: "shipping_method",
                        id: "shipping_method"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.shipping_method = e.target.multiple ? n : n[0]
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: ""
                    }
                }, [t._v("‐ " + t._s(t.__("Select a Method", "dokan")) + " ‐")]), t._v(" "), n("option", {
                    attrs: {
                        value: "flat_rate"
                    }
                }, [t._v(t._s(t.__("Flat Rate", "dokan")))]), t._v(" "),n("option", {
                    attrs: {
                        value: "dk_shipping_rate_by_distance"
                    }
                }, [t._v(t._s(t.__("Shipping Rate By Distance", "dokan")))]), t._v(" "), n("option", {
                    attrs: {
                        value: "local_pickup"
                    }
                }, [t._v(t._s(t.__("Local Pickup", "dokan")))]), t._v(" "), n("option", {
                    attrs: {
                        value: "free_shipping"
                    }
                }, [t._v(t._s(t.__("Free Shipping", "dokan")))])])]), t._v(" "), n("template", {
                    slot: "footer"
                }, [n("button", {
                    staticClass: "button button-primary button-large shipping-range",
                    on: {
                        click: function(e) {
                            if(jQuery("#method_address").val() == ''){
                                alert("please Enter Address");
                            }
                         
                            return e.preventDefault(), t.addNewMethod(e)
                        }
                    }
                }, [t._v(t._s(t.__("Add Shipping Method", "dokan")))])])], 2) : t._e(), t._v(" "), t.editShippingMethodModal ? n("modal", {
                    attrs: {
                        title: t.editShippingMethodTitle
                    },
                    on: {
                        close: function(e) {
                            t.editShippingMethodModal = !1
                        }
                    }
                }, ["free_shipping" != t.editShippingMethodData.method_id ? n("template", {
                    slot: "body"
                }, [n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "method_title"
                    }
                }, [t._v(t._s(t.__("Title", "dokan")))]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.title,
                        expression: "editShippingMethodData.settings.title"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "method_title",
                        placeholder: t.__("Enter method title", "dokan")
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.title
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "title", e.target.value)
                        }
                    }
                })]), t._v(" "),"dk_shipping_rate_by_distance" == t.editShippingMethodData.method_id ? n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "method_address"
                    }
                }, [t._v(t._s(t.__("address", "dokan")))]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.address,
                        expression: "editShippingMethodData.settings.address"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "method_address",
                        placeholder: t.__("Enter Full Address[Street lines, City, State, Country, Postcode", "dokan"),
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.address
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "address", e.target.value)
                        }
                    }
                })]): t._e(), t._v(" "),
                "dk_shipping_rate_by_distance" == t.editShippingMethodData.method_id ? n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                	 attrs: {
                        for: "method_km_range"
                    } 
                }, [t._v(t._s(t.__("Distance Range & Rate(In KM)", "dokan")))]), t._v(" ")]): t._e(), 
                "dk_shipping_rate_by_distance" == t.editShippingMethodData.method_id ? [n("div", {
                    staticClass: "dokan-form-group range-items"
                }, t.editShippingMethodData.settings.range != null ? 
                t._l(t.editShippingMethodData.settings.range, function(value,i){
                   return  n("div", {
                    staticClass: "range-item",
                   
                },  [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: value[0],
                        expression: "editShippingMethodData.settings.minrange_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "minrange_"+i,
                        placeholder: t.__("Minimum Range KM", "dokan"),
                        name: "range[][min]"
                    },
                    domProps: {
                        value: value[0]
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "minrange_1", e.target.value)
                        },
                       
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: value[1],
                        expression: "editShippingMethodData.settings.maxrange_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "maxrange_"+i,
                        placeholder: t.__("Maximum Range KM", "dokan"),
                        name: "range[][max]"
                    },
                    domProps: {
                        value: value[1]
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "maxrange_1", e.target.value)
                        }
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: value[2],
                        expression: "editShippingMethodData.settings.rates_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "rates_"+i,
                        placeholder: t.__("Rates ($)", "dokan"),
                        name: "range[][rate]"
                    },
                    domProps: {
                        value: value[2]
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "rates_1", e.target.value)
                        }
                    }
                }),n("button", {
                     staticClass: "btn btn-danger btn-range-delete dokan-w2 fa fa-trash",
                })])
                }):
                [n("div", {
                	staticClass: "range-item",
                   
                },  [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.minrange_1,
                        expression: "editShippingMethodData.settings.minrange_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "minrange_1",
                        placeholder: t.__("Minimum Range KM", "dokan"),
                        name: "range[][min]"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.minrange_1
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "minrange_1", e.target.value)
                        },
                       
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.maxrange_1,
                        expression: "editShippingMethodData.settings.maxrange_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "maxrange_1",
                        placeholder: t.__("Maximum Range KM", "dokan"),
                        name: "range[][max]"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.maxrange_1
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "maxrange_1", e.target.value)
                        }
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.rates_1,
                        expression: "editShippingMethodData.settings.rates_1"
                    }],
                    staticClass: "dokan-form-control dokan-w3 range-field",
                    attrs: {
                        type: "number",
                        id: "rates_1",
                        placeholder: t.__("Rates ($)", "dokan"),
                        name: "range[][rate]"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.rates_1
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "rates_1", e.target.value)
                        }
                    }
                }),n("button", {
                     staticClass: "btn btn-danger btn-range-delete dokan-w2 fa fa-trash",
                })])])]: t._e(), t._v(" "),"dk_shipping_rate_by_distance" == t.editShippingMethodData.method_id ? n("div", {
                    staticClass: "dokan-form-group"
                }, [n("button", {
                	 staticClass: "btn fa fa-plus btn_ship_range",
                	 on:{
                	 	click: function(n){
                	 		
                	 		var cloneIndex =  parseInt(jQuery('.range-items').find( '.range-item' ).length) + 1;
                           
                            var removebutton = '';
                            if(cloneIndex <= 2){
                                removebutton = "<a href='javascript:void(0)' class='btn btn-danger btn-range-delete dokan-w2'> <i class='fa fa-trash'></i> </a>";
                            }
                            var appendHtml = jQuery('.range-items').find( '.range-item:first' ).html();
                	 		var appendHtml1 = appendHtml.split( "_1" ).join( "_" + cloneIndex );
                   	 		var htmlContent = "<div class='range-item'>"+appendHtml1+"</div>";
                	 		jQuery('.range-items').append( htmlContent );

                	 	},
                       
                	 }
                   
                }, [t._v(t._s(t.__("Add Range", "dokan")))]), t._v(" ")]): t._e(), n("div", {
                    staticClass: "dokan-form-group"
                }, [ "dk_shipping_rate_by_distance" != t.editShippingMethodData.method_id ? n("label", {
                    attrs: {
                        for: "method_cost"
                    }
                }, [t._v(t._s(t.__("Cost", "dokan")))]): t._e(), t._v(" "),"dk_shipping_rate_by_distance" != t.editShippingMethodData.method_id ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.cost,
                        expression: "editShippingMethodData.settings.cost"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "method_cost",
                        placeholder: "0.00"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.cost
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "cost", e.target.value)
                        }
                    }
                }): t._e(), t._v(" "), ("flat_rate" == t.editShippingMethodData.method_id &&  "dk_shipping_rate_by_distance" != t.editShippingMethodData.method_id) ? n("span", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.cost_description)
                    }
                }) : t._e()]), t._v(" "),  "dk_shipping_rate_by_distance" != t.editShippingMethodData.method_id ? n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "method_tax_status"
                    }
                }, [t._v(t._s(t.__("Tax Status", "dokan")))]), t._v(" "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.tax_status,
                        expression: "editShippingMethodData.settings.tax_status"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        id: "method_tax_status"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.editShippingMethodData.settings, "tax_status", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "none"
                    }
                }, [t._v(t._s(t.__("None", "dokan")))]), t._v(" "), n("option", {
                    attrs: {
                        value: "taxable"
                    }
                }, [t._v(t._s(t.__("Taxable", "dokan")))])])]): t._e(), t._v(" "), "dk_shipping_rate_by_distance" != t.editShippingMethodData.method_id ? n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "method_description"
                    }
                }, [t._v(t._s(t.__("Description", "dokan")))]), t._v(" "), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.description,
                        expression: "editShippingMethodData.settings.description"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        id: "method_description"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.description
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "description", e.target.value)
                        }
                    }
                }, [t._v(t._s(t.editShippingMethodData.settings.description))])]): t._e(), t._v(" "), "flat_rate" == t.editShippingMethodData.method_id ? [n("hr"), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("h3", [t._v(t._s(t.__("Shipping Class Cost", "dokan")))]), t._v(" "), n("span", {
                    staticClass: "description"
                }, [t._v(t._s(t.__("These costs can optionally be added based on the product shipping class", "dokan")))])]), t._v(" "), t._l(t.shippingClasses, (function(e) {
                    return [n("div", {
                        staticClass: "dokan-form-group"
                    }, [n("label", {
                        attrs: {
                            for: e.slug
                        }
                    }, [t._v('"' + t._s(e.name) + '" ' + t._s(t.__("shipping class cost", "dokan")))]), t._v(" "), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.editShippingMethodData.settings["class_cost_" + e.term_id],
                            expression: "editShippingMethodData.settings['class_cost_' + shippingClass.term_id]"
                        }],
                        staticClass: "dokan-form-control",
                        attrs: {
                            type: "text",
                            id: e.slug,
                            placeholder: "N\\A"
                        },
                        domProps: {
                            value: t.editShippingMethodData.settings["class_cost_" + e.term_id]
                        },
                        on: {
                            input: function(n) {
                                n.target.composing || t.$set(t.editShippingMethodData.settings, "class_cost_" + e.term_id, n.target.value)
                            }
                        }
                    }), t._v(" "), "flat_rate" == t.editShippingMethodData.method_id ? n("span", {
                        staticClass: "description",
                        domProps: {
                            innerHTML: t._s(t.cost_description)
                        }
                    }) : t._e()])]
                })), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "no_class_cost"
                    }
                }, [t._v(t._s(t.__("No shipping class cost", "dokan")))]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.no_class_cost,
                        expression: "editShippingMethodData.settings.no_class_cost"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "no_class_cost",
                        placeholder: "N\\A"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.no_class_cost
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "no_class_cost", e.target.value)
                        }
                    }
                }), t._v(" "), "flat_rate" == t.editShippingMethodData.method_id ? n("span", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.cost_description)
                    }
                }) : t._e()]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "calculation_type"
                    }
                }, [t._v(t._s(t.__("Calculation type", "dokan")))]), t._v(" "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.calculation_type,
                        expression: "editShippingMethodData.settings.calculation_type"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        id: "calculation_type"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.editShippingMethodData.settings, "calculation_type", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "class"
                    }
                }, [t._v(t._s(t.__("Per class: Charge shipping for each shipping class individually", "dokan")))]), t._v(" "), n("option", {
                    attrs: {
                        value: "order"
                    },
                    domProps: {
                        selected: !0
                    }
                }, [t._v(t._s(t.__("Per order: Charge shipping for the most expensive shipping class", "dokan")))])])])] : t._e()], 2) : n("template", {
                    slot: "body"
                }, [n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "method_title"
                    }
                }, [t._v(t._s(t.__("Method Title", "dokan")))]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.title,
                        expression: "editShippingMethodData.settings.title"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "method_title",
                        placeholder: t.__("Enter method title", "dokan")
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.title
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "title", e.target.value)
                        }
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    attrs: {
                        for: "minimum_order_amount"
                    }
                }, [t._v(t._s(t.__("Minimum order amount for free shipping", "dokan")))]), t._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.editShippingMethodData.settings.min_amount,
                        expression: "editShippingMethodData.settings.min_amount"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        type: "text",
                        id: "minimum_order_amount",
                        placeholder: "0.00"
                    },
                    domProps: {
                        value: t.editShippingMethodData.settings.min_amount
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.editShippingMethodData.settings, "min_amount", e.target.value)
                        }
                    }
                }), t._v(" "), "flat_rate" == t.editShippingMethodData.method_id ? n("span", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: t._s(t.cost_description)
                    }
                }) : t._e()])]), t._v(" "), n("template", {
                    slot: "footer"
                }, [n("button", {
                    staticClass: "button button-primary button-large",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.updateShippingMethodSettings(e)
                        }
                    }
                }, [t._v(t._s(t.__("Save Settings", "dokan")))])])], 2) : t._e()], 1)
            }), [], !1, null, null, null).exports),
            p = {
                name: "Settings",
                data: function() {
                    return {
                        successMessage: "",
                        shippingSettings: {
                            shipping_policy: "",
                            refund_policy: "",
                            processing_time: ""
                        }
                    }
                },
                methods: {
                    getProcessingTimes: function() {
                        return dokanShipping.processing_time
                    },
                    saveSettings: function() {
                        var t = this,
                            e = {
                                action: "dokan-save-shipping-settings",
                                settings: t.shippingSettings,
                                nonce: dokan.nonce
                            };
                        jQuery("#shipping-settings").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.successMessage = e.data, jQuery("#shipping-settings").unblock()) : (jQuery("#shipping-settings").unblock(), alert(e.data))
                        }))
                    },
                    getSettings: function() {
                        var t = this,
                            e = {
                                action: "dokan-get-shipping-settings",
                                nonce: dokan.nonce
                            };
                        jQuery("#shipping-settings").block({
                            message: null,
                            overlayCSS: {
                                background: "#fff url(" + dokan.ajax_loader + ") no-repeat center",
                                opacity: .6
                            }
                        }), jQuery.post(dokan.ajaxurl, e, (function(e) {
                            e.success ? (t.shippingSettings = e.data, jQuery("#shipping-settings").unblock()) : (jQuery("#shipping-settings").unblock(), alert(e.data))
                        }))
                    }
                },
                created: function() {
                    this.getSettings()
                }
            },
            l = (n(40), Object(a.a)(p, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "dokan-shipping-settings",
                    attrs: {
                        id: "shipping-settings"
                    }
                }, [t.successMessage ? n("div", {
                    staticClass: "dokan-alert dokan-alert-success"
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.successMessage)
                    }
                }), t._v(" "), n("a", {
                    staticClass: "dokan-close",
                    attrs: {
                        "data-dismiss": "alert"
                    }
                }, [t._v("×")])]) : t._e(), t._v(" "), n("div", {
                    staticClass: "back-link"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "Main"
                        }
                    }
                }, [t._v(t._s(t.__("← Back to Zone List", "dokan")))])], 1), t._v(" "), n("form", {
                    attrs: {
                        method: "post",
                        id: "shipping-settings"
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.saveSettings(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "dokan-shipping-wrapper"
                }, [n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    staticClass: "dokan-w3",
                    attrs: {
                        for: "dps_pt"
                    }
                }, [t._v("\n                    " + t._s(t.__("Processing Time", "dokan")) + "\n                    "), n("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "dokan-tooltips-help tips",
                    attrs: {
                        title: t.__("Write your terms, conditions and instructions about shipping", "dokan")
                    }
                }, [n("i", {
                    staticClass: "fa fa-question-circle"
                })])]), t._v(" "), n("div", {
                    staticClass: "dokan-w6 dokan-text-left"
                }, [n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.shippingSettings.processing_time,
                        expression: "shippingSettings.processing_time"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        name: "dps_pt",
                        id: "dps_pt"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.shippingSettings, "processing_time", e.target.multiple ? n : n[0])
                        }
                    }
                }, t._l(t.getProcessingTimes(), (function(e, o) {
                    return n("option", {
                        domProps: {
                            value: o
                        }
                    }, [t._v(t._s(e))])
                })), 0)])]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    staticClass: "dokan-w3",
                    attrs: {
                        for: "_dps_shipping_policy"
                    }
                }, [t._v("\n                    " + t._s(t.__("Shipping Policy", "dokan")) + "\n                    "), n("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "dokan-tooltips-help tips",
                    attrs: {
                        title: t.__("Write your terms, conditions and instructions about shipping", "dokan")
                    }
                }, [n("i", {
                    staticClass: "fa fa-question-circle"
                })])]), t._v(" "), n("div", {
                    staticClass: "dokan-w6 dokan-text-left"
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.shippingSettings.shipping_policy,
                        expression: "shippingSettings.shipping_policy"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        id: "_dps_shipping_policy",
                        rows: "6"
                    },
                    domProps: {
                        value: t.shippingSettings.shipping_policy
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.shippingSettings, "shipping_policy", e.target.value)
                        }
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("label", {
                    staticClass: "dokan-w3",
                    attrs: {
                        for: "_dps_refund_policy"
                    }
                }, [t._v("\n                    " + t._s(t.__("Refund Policy", "dokan")) + "\n                    "), n("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "dokan-tooltips-help tips",
                    attrs: {
                        title: t.__("Write your terms, conditions and instructions about refund", "dokan")
                    }
                }, [n("i", {
                    staticClass: "fa fa-question-circle"
                })])]), t._v(" "), n("div", {
                    staticClass: "dokan-w6 dokan-text-left"
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.shippingSettings.refund_policy,
                        expression: "shippingSettings.refund_policy"
                    }],
                    staticClass: "dokan-form-control",
                    attrs: {
                        rows: "6"
                    },
                    domProps: {
                        value: t.shippingSettings.refund_policy
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.shippingSettings, "refund_policy", e.target.value)
                        }
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "dokan-form-group"
                }, [n("div", {
                    staticClass: "dokan-w4",
                    staticStyle: {
                        "margin-left": "27%"
                    }
                }, [n("input", {
                    staticClass: "dokan-btn dokan-btn-danger dokan-btn-theme",
                    attrs: {
                        type: "submit",
                        name: "update_shipping_settings"
                    },
                    domProps: {
                        value: t.__("Save Settings", "dokan")
                    }
                })])])])])])
            }), [], !1, null, null, null).exports),
            u = dokan_get_lib("Vue"),
            h = dokan_get_lib("Router");
        u.use(h);
        var g = new h({
            routes: [{
                path: "/",
                component: r,
                name: "Main"
            }, {
                path: "/settings",
                component: l,
                name: "Settings"
            }, {
                path: "/zone/:zoneID",
                component: c,
                name: "Zone"
            }]
        });
        new(dokan_get_lib("Vue"))({
            el: "#dokan-vue-shipping",
            router: g,
            render: function(t) {
                return t(i)
            },
            created: function() {
                this.setLocaleData(dokanShipping.i18n.dokan)
            }
        })
    }
});