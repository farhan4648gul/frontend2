/**
 * Created by farhan.gul on 5/3/17.
 */

//$(function(){

    console.log('called');
    window.App = {
       Models: {},
       Collections: {},
       Views: {},

    };

    var app = {};
    var View = Backbone.View.extend({
        el: '#sidebar-nav',
        template: $("#main-nav").html(),
        initialize: function(){
            // console.log('in initialize');
            this.render();
        },
        render: function(){
            //should I put code in initialize or just here?

            // console.log('in render');
            // console.log($("#main-nav").html());
            // console.log(this.template);
            var templateScript = Handlebars.compile( $("#main-nav").html() );
            var content = [];
            content['title'] = 'Navigation';
            content['links'] = app.router.routes;
            var html = templateScript(content);
            console.log(content);
            this.$el.html(html);
        }

    });

    var Router = Backbone.Router.extend({
        routes: {
            "" : "home",
            "me": "validateSession",
        },
        home: function(){
            //reinitializes nav, fix it
            console.log('in home function');
            //app.baseView();
        },
        validateSession: function(){
            // TODO: create authentication
            console.log('validating user session');
        }
    });

    app.router = new Router();
    app.baseView = new View();

    Backbone.history.start();

    //authenticate user

    //set navigation


//});



