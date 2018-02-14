// This is an active module of the mandyjohar (1) Add-on
exports.main = function() {
    var contextMenu = require('context-menu');
    var selection = require('selection');
    var tabs = require("sdk/tabs");
    
    var menuItem1 = contextMenu.Item({
        label: "Google Translate : selection to English",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/en/" + text);
        }
    });
    var s1 = contextMenu.Item({
        label: "to Arabic (اللغة العربية)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ar/" + text);
        }
    });
    var s2 = contextMenu.Item({
        label: "to Bengali (বাংলা)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/bn/" + text);
        }
    });
    var s3 = contextMenu.Item({
        label: "to French (Français))",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/fr/" + text);
        }
    });
    var s4 = contextMenu.Item({
        label: "to Chinese(Simplified) (中文（简体）))",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/zh-CN/" + text);
        }
    });
    var s5 = contextMenu.Item({
        label: "to Chinese(Traditional) (中文（繁体）))",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/zh-TW/" + text);
        }
    });
    var s6 = contextMenu.Item({
        label: "to German (Deutsch)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/de/" + text);
        }
    });
    var s7 = contextMenu.Item({
        label: "to Hindi (हिन्दी)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/hi/" + text);
        }
    });
    var s8 = contextMenu.Item({
        label: "to Indonesian (Bahasa Indonesia)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/id/" + text);
        }
    });
    var s9 = contextMenu.Item({
        label: "to Japanese (日本語)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ja/" + text);
        }
    });
    var s10 = contextMenu.Item({
        label: "to Javanese (ꦧꦱꦗꦮ)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/jw/" + text);
        }
    });
    var s11 = contextMenu.Item({
        label: "to Korean (조선말, 한국어)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ko/" + text);
        }
    });
    var s12 = contextMenu.Item({
        label: "to Malay (Bahasa Melayu)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ms/" + text);
        }
    });
    var s13 = contextMenu.Item({
        label: "to Marathi (मराठी)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/mr/" + text);
        }
    });
    var s14 = contextMenu.Item({
        label: "to Persian (فارسی)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/fa/" + text);
        }
    });
    var s15 = contextMenu.Item({
        label: "to Portuguese (Português)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/pt/" + text);
        }
    });
    var s16 = contextMenu.Item({
        label: "to Russian (Русский)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ru/" + text);
        }
    });
    var s17 = contextMenu.Item({
        label: "to Spanish (Español)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/es/" + text);
        }
    });
    var s18 = contextMenu.Item({
        label: "to Tamil (தமிழ்)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ta/" + text);
        }
    });
    var s19 = contextMenu.Item({
        label: "to Telugu (తెలుగు)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/te/" + text);
        }
    });
    var s20 = contextMenu.Item({
        label: "to Turkish (Türkçe)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/tr/" + text);
        }
    });
    var s21 = contextMenu.Item({
        label: "to Urdu (ہندوستانی)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/ur/" + text);
        }
    });
    var s22 = contextMenu.Item({
        label: "to Vietnamese (Tiếng Việt)",
        context: contextMenu.SelectionContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/#auto/vi/" + text);
        }
    });
    var subMenu = contextMenu.Menu({
        label: "Google Translate : selection to Others ...",
        image: "https://builder.addons.mozilla.org/attachment/589938",
        context: contextMenu.SelectionContext(),
        items: [s1,s2,s4,s5,s3,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22]
    });
    var menuItem = contextMenu.Item({
        label: "Google Translate : whole page to English",
        image: "https://builder.addons.mozilla.org/attachment/589938",
        context: contextMenu.PageContext(),
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|en&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var menuItem5 = contextMenu.Item({    
        label: "Google Translate : Text to Speech",
        image: "https://builder.addons.mozilla.org/attachment/590448",
        context: contextMenu.SelectionContext(),
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate_tts?tl=en&q=" + text);
        }
    });
    var menuItem2 = contextMenu.Item({    
        label: "Search YouTube for the selection",
        image: "https://builder.addons.mozilla.org/attachment/589946",
        context: contextMenu.SelectionContext(),
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("https://www.youtube.com/results?search_query=" + text);
        }
    });
    var menuItem4 = contextMenu.Item({    
        label: "Search Dictionary for the selection",
        image: "https://builder.addons.mozilla.org/attachment/590445",
        context: contextMenu.SelectionContext(),
        contentScript: 'self.on("click", function () {' +
                            'var text = window.getSelection().toString();' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://dictionary.reference.com/browse/" + text);
        }
    });
    var t1 = contextMenu.Item({
        label: "to Arabic (اللغة العربية)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ar&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t2 = contextMenu.Item({
        label: "to Bengali (বাংলা)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|bn&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t3 = contextMenu.Item({
        label: "to French (Français))",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|fr&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t4 = contextMenu.Item({
        label: "to Chinese(Simplified) (中文（简体）))",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|zh-CN&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t5 = contextMenu.Item({
        label: "to Chinese(Traditional) (中文（繁体）))",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|zh-TW&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t6 = contextMenu.Item({
        label: "to German (Deutsch)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|de&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t7 = contextMenu.Item({
        label: "to Hindi (हिन्दी)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|hi&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t8 = contextMenu.Item({
        label: "to Indonesian (Bahasa Indonesia)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|id&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t9 = contextMenu.Item({
        label: "to Japanese (日本語)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ja&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t10 = contextMenu.Item({
        label: "to Javanese (ꦧꦱꦗꦮ)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|jw&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t11 = contextMenu.Item({
        label: "to Korean (조선말, 한국어)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ko&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t12 = contextMenu.Item({
        label: "to Malay (Bahasa Melayu)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ms&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t13 = contextMenu.Item({
        label: "to Marathi (मराठी)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|mr&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t14 = contextMenu.Item({
        label: "to Persian (فارسی)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|fa&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t15 = contextMenu.Item({
        label: "to Portuguese (Português)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|pt&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t16 = contextMenu.Item({
        label: "to Russian (Русский)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ru&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t17 = contextMenu.Item({
        label: "to Spanish (Español)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|es&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t18 = contextMenu.Item({
        label: "to Tamil (தமிழ்)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ta&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t19 = contextMenu.Item({
        label: "to Telugu (తెలుగు)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|te&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t20 = contextMenu.Item({
        label: "to Turkish (Türkçe)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|tr&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t21 = contextMenu.Item({
        label: "to Urdu (ہندوستانی)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|ur&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var t22 = contextMenu.Item({
        label: "to Vietnamese (Tiếng Việt)",
        context: contextMenu.PageContext(),
        image: "https://builder.addons.mozilla.org/attachment/589938",
        contentScript: 'self.on("click", function () {' +
                            'var text = location.href;' +
                            'self.postMessage(text);' +
                        '});',
        onMessage: function (text) {
            if (text.length === 0) {
                throw ('Text to translate must not be empty');
            }            
            tabs.open("http://translate.google.com/translate?hl=en&langpair=auto|vi&tbb=1&ie=UTF-8&u=" + text);
        }
    });
    var subMenu1 = contextMenu.Menu({
        label: "Google Translate : whole page to Others ...",
        image: "https://builder.addons.mozilla.org/attachment/589938",
        context: contextMenu.PageContext(),
        items: [t1,t2,t4,t5,t3,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22]
    });
};