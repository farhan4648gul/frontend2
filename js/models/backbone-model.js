
// Default Model for Application

var ModuleModel = Backbone.Model.extend({
    defaults: {
        // title: '', //models in my case do not need a title, collections do
        url: '/',
        // model_type: '', //type in collection, based on user_role

        //attributes list
        id: '',
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        phone: '',
        address: '',
        user_role: '',
        university_id: '',
        added_on: '',
        updated_on: '',
        updated_by: '',
        status: '',
        blocked: '',

    },
    idAttribute: 'id', // will it work? //based on primary id
    schema: {
        email: {
            validators: ['required', 'email']
        },
        username: {
            validators: ['required']
        },
        password: {
            type: 'Password',
            validators: ['required']
        },
        confirmPassword: {
            type: 'Password',
            validators: [
                'required',
                {
                    type: 'match',
                    field: 'password',
                    message: 'Passwords must match!',
                }
            ]
        },
        firstName: {
            validators: ['required']
        },
        middleName: {

        },
        lastName: {
            validators: ['required']
        },
        phone: {

        },
        address: {

        },
        userRole: {
            type: 'Select',
            options: [
                'Teacher',
                'Student',
                'Admin'
            ]
        },
        universityId: {
            validators: ['required']
        },
        status: {
            type: 'Select',
            options: [
                'Active',
                'Inactive'
            ]
        },
        blocked: {
            type: 'Select',
            options: [
                'Yes',
                'No'
            ]
        }

    },
    initialize: function(){

        //where to bind error show event ?

        //fill dummy data
        this.demoData();
        console.log('data filled');
    },

    validate: function(){
        // ? dummy data should be validated
    },

    demoData: function(){

        this.attributes.id = Math.floor( Math.random() * 100000 );
        this.attributes.email = Math.floor( Math.random() * 100000 );
        this.attributes.username = Math.floor( Math.random() * 100000 );
        this.attributes.first_name = Math.floor( Math.random() * 100000 );
        this.attributes.last_name = Math.floor( Math.random() * 100000 );
        this.attributes.middle_name = Math.floor( Math.random() * 100000 );
        this.attributes.phone = Math.floor( Math.random() * 100000 );
        this.attributes.address = Math.floor( Math.random() * 100000 );
        this.attributes.user_role = Math.floor( Math.random() * 100000 );
        this.attributes.university_id = Math.floor( Math.random() * 100000 );
        this.attributes.added_on = Math.floor( Math.random() * 100000 );
        this.attributes.updated_on = Math.floor( Math.random() * 100000 );
        this.attributes.updated_by = Math.floor( Math.random() * 100000 );
        this.attributes.status = Math.floor( Math.random() * 100000 );
        this.attributes.blocked = Math.floor( Math.random() * 100000 );

    },
    urlRoot: window.location.href + '/' + this.model_type + '/', //change this with app.webroot

});