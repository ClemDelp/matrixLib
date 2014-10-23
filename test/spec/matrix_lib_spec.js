describe('matrix lib test', function(){
	beforeEach(function() {
		
	});
    
    afterEach(function() {
      
    });
    //
//m.positionMatriceIntoMatrice();
//console.log('getEmptySpace - test_1 : ',problem.getEmptySpace([1,2],[[0,0,0],[0,0,0],[0,0,1],[0,1,0]]));
//console.log('getPosition - test_1 : ',problem.getPosition([[1,1,1],[1,1,1],[1,1,1],[1,1,1]]));
//console.log('matriceFusion : ',m.matriceFusion( [[1,0,1,0],[0,0,1,0],[0,1,1,0]] , [1,1,1,1,1]) );



    it('getJsonSize', function(){
        var json_0 = {};
        var json_1 = {'1':1,'2':2};
        var json_2 = {'1':1,'2':2,'z':1,'tr':2};

        expect(mlib.getJsonSize(json_0)).toBe(0);
        expect(mlib.getJsonSize(json_1)).toBe(2);
        expect(mlib.getJsonSize(json_2)).toBe(4);
    });

    it('positionMatriceIntoMatrice', function(){
        var m1 = [[1,1,0],[1,1,0],[1,1,0],[1,1,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        var m2 = [[1],[1],[1],[1]];
        var m3 = [2,0];

        var m4 = [[1,0,0],[1,1,0],[0,1,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        var m5 = [[1,1],[1,0],[1,0]];
        var m6 = [0,0];

        console.log(mlib.positionMatriceIntoMatrice(m1,m2,m3))
        //expect(mlib.positionMatriceIntoMatrice(m1,m2,m3)).toEqual([2, 0]);

    });



});