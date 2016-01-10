/* Inicializamos la aplicacion angular y sus modulos */
var contactApp = angular.module('contactApp', []);

/* Creamos un controlador */
contactApp.controller('alumnoController', function($scope){

    $scope.alumnos = [
            {
                Nombre: "Victor Pino",
                Telefono: "0426-6543212",
                Curso: "1er año"
            },
            {
                Nombre: "Hugo Gonzalez",
                Telefono: "0414-1234345",
                Curso: "2do año"
            },
            {
                Nombre: "Andrea Carrillo",
                Telefono: "0416-7221024",
                Curso: "1er año"
            }
        ]

});