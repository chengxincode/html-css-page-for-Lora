var UITree = function () {
    var contextualMenuSample = function() {
        $("#tree_1").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                        }, {
                            "text": "Initially open",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {
                                    "text": "Another node", 
                                }
                            ]
                        }, {
                            "text": "Another Custom Icon",
                        }, {
                            "text": "Disabled Node",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "children": [
                                {"text": "Item 1"},
                                {"text": "Item 2"},
                                {"text": "Item 3"},
                                {"text": "Item 4"},
                                {"text": "Item 5"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
        $("#tree_2").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                        }, {
                            "text": "Initially open",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {
                                    "text": "Another node", 
                                }
                            ]
                        }, {
                            "text": "Another Custom Icon",
                        }, {
                            "text": "Disabled Node",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "children": [
                                {"text": "Item 1"},
                                {"text": "Item 2"},
                                {"text": "Item 3"},
                                {"text": "Item 4"},
                                {"text": "Item 5"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
        $("#tree_3").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                        }, {
                            "text": "Initially open",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {
                                    "text": "Another node", 
                                }
                            ]
                        }, {
                            "text": "Another Custom Icon",
                        }, {
                            "text": "Disabled Node",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "children": [
                                {"text": "Item 1"},
                                {"text": "Item 2"},
                                {"text": "Item 3"},
                                {"text": "Item 4"},
                                {"text": "Item 5"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
        $("#tree_4").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                        }, {
                            "text": "Initially open",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {
                                    "text": "Another node", 
                                }
                            ]
                        }, {
                            "text": "Another Custom Icon",
                        }, {
                            "text": "Disabled Node",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "children": [
                                {"text": "Item 1"},
                                {"text": "Item 2"},
                                {"text": "Item 3"},
                                {"text": "Item 4"},
                                {"text": "Item 5"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "dnd", "state", "types" ]
        });
    }
    return {
        //main function to initiate the module
        init: function () {
            contextualMenuSample();
        }
    };
}();

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function() {    
       UITree.init();
    });
}