angular.module('rootModule')
    .controller('contactListCtrl', function($scope){
        $scope.itemList = [
            {name: 'Alex', phone: '+375291111111', show: true},
            {name: 'Bob', phone: '+375292222222', show: true},
            {name: 'Birdus', phone: '+375293333333', show: true},
            {name: 'Aleksandr', phone: '+375294444444', show: true},
            {name: 'Arnold', phone: '+375295555555', show: true},
            {name: 'Sasha', phone: '+375296666666', show: true},
            {name: 'Mark', phone: '+375297777777', show: true},
            {name: 'Boris', phone: '+375298888888', show: true},
            {name: 'Archi', phone: '+375299999999', show: true}
        ]
});
