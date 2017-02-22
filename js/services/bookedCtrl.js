app.controller('bookedCtrl', function ($scope, $stateParams, mainSrv)
{
    $scope.currentBook = null;
    mainSrv.travelInfo.some(function (loc)
    {
        if (loc.id == $stateParams.id)
        {
            $scope.currentBook = loc;
            $scope.image = {'background-image': 'url(' + loc.image + ")"};
            return true;
        }
        return false;
    });
});