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
                    "text": "Impact Area",
                    "children": [{
                        "text": "Ambulatory Surgery Centers",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Hospices",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Hospices Option 1"}, 
                            {"text": "Hospices Option 2"}, 
                            {
                                "text": "Hospices Option 3",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Hospices Option 3", 
                                    "children": [
                                        {"text": "Hospices Option 3a"}
                                    ],
                                }]
                            }
                        ]
                    }, {
                        "text": "Long Term Care Facilities",
                    }, {
                        "text": "Psychiatric Residential Treatment Facilities",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Critical Access Hospitals",
                        "children": [
                            {"text": "Item 1"},
                            {"text": "Item 2"},
                            {"text": "Item 3"},
                            {"text": "Item 4"},
                            {"text": "Item 5"}
                        ]
                    }]
                }
            ]},
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
                    "text": "Impact Area",
                    "children": [{
                        "text": "Ambulatory Surgery Centers",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Hospices",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Hospices Option 1"}, 
                            {"text": "Hospices Option 2"}, 
                            {
                                "text": "Hospices Option 3",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Hospices Option 3", 
                                    "children": [
                                        {"text": "Hospices Option 3a"}
                                    ],
                                }]
                            }
                        ]
                    }, {
                        "text": "Long Term Care Facilities",
                    }, {
                        "text": "Psychiatric Residential Treatment Facilities",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Critical Access Hospitals",
                        "children": [
                            {"text": "Item 1"},
                            {"text": "Item 2"},
                            {"text": "Item 3"},
                            {"text": "Item 4"},
                            {"text": "Item 5"}
                        ]
                    }]
                }
            ]},
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
                    "text": "Impact Area",
                    "children": [{
                        "text": "Ambulatory Surgery Centers",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Hospices",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Hospices Option 1"}, 
                            {"text": "Hospices Option 2"}, 
                            {
                                "text": "Hospices Option 3",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Hospices Option 3", 
                                    "children": [
                                        {"text": "Hospices Option 3a"}
                                    ],
                                }]
                            }
                        ]
                    }, {
                        "text": "Long Term Care Facilities",
                    }, {
                        "text": "Psychiatric Residential Treatment Facilities",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Critical Access Hospitals",
                        "children": [
                            {"text": "Item 1"},
                            {"text": "Item 2"},
                            {"text": "Item 3"},
                            {"text": "Item 4"},
                            {"text": "Item 5"}
                        ]
                    }]
                }
            ]},
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
                    "text": "Impact Area",
                    "children": [{
                        "text": "Ambulatory Surgery Centers",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Hospices",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Hospices Option 1"}, 
                            {"text": "Hospices Option 2"}, 
                            {
                                "text": "Hospices Option 3",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Hospices Option 3", 
                                    "children": [
                                        {"text": "Hospices Option 3a"}
                                    ],
                                }]
                            }
                        ]
                    }, {
                        "text": "Long Term Care Facilities",
                    }, {
                        "text": "Psychiatric Residential Treatment Facilities",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Critical Access Hospitals",
                        "children": [
                            {"text": "Item 1"},
                            {"text": "Item 2"},
                            {"text": "Item 3"},
                            {"text": "Item 4"},
                            {"text": "Item 5"}
                        ]
                    }]
                }
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
        $("#tree_5").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Impact Area",
                        "children": [{
                            "text": "Ambulatory Surgery Centers",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Hospices",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Hospices Option 1"}, 
                                {"text": "Hospices Option 2"}, 
                                {
                                    "text": "Hospices Option 3",
                                    "state": {
                                        "opened": true
                                    },
                                    "children": [{
                                        "text": "Hospices Option 3", 
                                        "children": [
                                            {"text": "Hospices Option 3a"}
                                        ],
                                    }]
                                }
                            ]
                        }, {
                            "text": "Long Term Care Facilities",
                        }, {
                            "text": "Psychiatric Residential Treatment Facilities",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Critical Access Hospitals",
                            "children": [
                                {"text": "Item 1"},
                                {"text": "Item 2"},
                                {"text": "Item 3"},
                                {"text": "Item 4"},
                                {"text": "Item 5"}
                            ]
                        }]
                    }
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