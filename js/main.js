/**
* Created by farhan.gul on 5/3/17.
*/



//namespace app
 window.App1 = {
   Models: {},
   Collections: {},
   Views: {},
   Templates: {},

};




app.router = new Router();
app.baseView = new View();
app.baseView.render();

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


// create dummy collection to fill moduleview
// app.studentModel = new ModuleModel();
// app.studentModel2 = new ModuleModel(); //only 1 record is showing, why?

 // app.studentCollection = new ModuleCollection( [app.studentModel, app.studentModel2]);

/*app.studentCollection = new ModuleCollection();
app.studentCollection.add(app.studentModel);
app.studentCollection.add(app.studentModel2);*/

// app.studentCollection.meta('type', 'student');
// app.studentCollection.meta('title', 'Student');
// app.studentCollection.meta('description', 'A little description here');


// console.log('student:');
// console.log(app.studentCollection);
/*for (var v in app.studentModel.attributes){
    console.log('attribute: ' + v);
}*/


// app.ModuleView = new ModuleView(app.studentCollection);
