/**
* Created by farhan.gul on 5/3/17.
*/

 window.App = {
   Models: {},
   Collections: {},
   Views: {},

};

var app = {}; //should be window.App
var View = Backbone.View.extend({

    el: '#main-content',
    template: $("#main-content").html(),

    initialize: function(){
        this.render();
    },

    render: function(){
        //should I put code in initialize or just here?
        this.showNavigation();
        this.showDashboard();
    },

    doRender: function(elem, template, content){
        elem = $("#"+elem);
        template = $("#"+template);
        var templateScript = Handlebars.compile(template.html());
        var html = templateScript(content);
        elem.html(html);

    },

    showDashboard: function(){

        var content = [];
        content['firstname'] = "Admin";
        content['lastname'] = "User"; //get this data from authorization api

        this.doRender("content-panel", "content-default", content);
    },

    showNavigation: function(){

        var content = [];
        content['title'] = 'Navigation';
        content['links'] = app.router.routes;

        this.doRender("sidebar-nav", "main-nav", content);

    }

});

var Router = Backbone.Router.extend({
    routes: {
        "" : "home", //using class active throws error
        "me": "validateSession",
        "course": "course",
        "student": "student",
        "teacher": "teacher",
    },
    initialize: function(){
        //this.bind('route', this.changeRoute);  // triggers after 'route' is finished
    },
    home: function(){
        console.log('in home function');
        app.baseView.showDashboard();
    },
    validateSession: function(){
        // TODO: create authentication
        console.log('validating user session');
    },
    clearPageArea: function(){
        $("#content-panel").html('');
    },
    changeRoute: function(){
        console.log('clearing');
        this.clearPageArea();
    },
    execute: function(callback, args, name){
        this.executeBefore();
        if ( callback ) callback.apply(this, args);
    },
    executeBefore: function(){
        // console.log('finally');
        this.clearPageArea();
    },
    selectedMenu: function(menuId){
        $("#"+menuId).addClass('active');
        // console.log('added');
    },
    clearSelectedMenu: function(){
        $("#menu-items").removeClass('active');
    }

});

app.router = new Router();
app.baseView = new View();

Backbone.history.start();
Backbone.history.on('route', function(){
    // triggers after route is complete
    /*app.router.clearPageArea();
    console.log('before change');*/

    //console.log(this.fragment);
    app.router.clearSelectedMenu();
    app.router.selectedMenu(this.fragment);
});

//authenticate user


//Handlebars functions
Handlebars.registerHelper('uppercase', function(context, options){
    //what is options here?
    console.log('inside');
    return context.charAt(0).toUpperCase() + context.slice(1);

});