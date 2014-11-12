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



    it('positionMatriceIntoMatrice', function(){
        var m1 = [[1,1,0],[1,1,0],[1,1,0],[1,1,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        var m2 = [[1],[1],[1],[1]];
        var m3 = [2,0];

        var m4 = [[1,0,0],[1,1,0],[0,1,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        var m5 = [[1,1],[1,0],[1,0]];
        var m6 = [0,0];

        //console.log(mlib.positionMatriceIntoMatrice(m1,m2,m3))
        //expect(mlib.positionMatriceIntoMatrice(m1,m2,m3)).toEqual([2, 0]);

    });

    it('getYArrayInMatrix', function(){
        var m1 = [
            [0,0,0],
            [0,1,0],
            [1,1,0],
            [1,0,0],
        ];
        var m2 = [
            [2,2,0],
            [0,2,0],
            [2,1,2],
            [2,1,0],
        ];
        expect(mlib.getYArrayInMatrix(0,1,m1)).toEqual([[0,1],[1,0]]);
        expect(mlib.getYArrayInMatrix(1,0,m1)).toEqual([[1,3]]);
        expect(mlib.getYArrayInMatrix(0,2,m2)).toEqual([[2,1],[0,1]]);
        expect(mlib.getYArrayInMatrix(2,0,m2)).toEqual([[2,3],[0,1]]);
    });

    it('getXArrayInMatrix', function(){
        var m1 = [
            [0,0,0],
            [0,1,0],
            [1,1,0],
            [1,0,1],
        ];
        var m2 = [
            [2,2,0],
            [0,2,0],
            [2,1,2],
            [2,1,0],
        ];
        expect(mlib.getXArrayInMatrix(0,1,m1)).toEqual([[1,3],[0,1]]);
        expect(mlib.getXArrayInMatrix(1,0,m1)).toEqual([[1,3],[2,2],[2,1]]);

    });

    it('getDiagoArrayIntoMatrix', function(){
        var m1 = [
            [0,0,0],
            [0,1,0],
            [1,1,0],
            [0,0,1],
        ];

        // expect(mlib.getDiagoArrayIntoMatrix([0,1],"no-se",m1)).toEqual([[0,1],[0,0]]);
        // expect(mlib.getDiagoArrayIntoMatrix([1,0],"no-se",m1)).toEqual([[1,3],[2,2]]);

        // expect(mlib.getDiagoArrayIntoMatrix([0,1],"ne-so",m1)).toEqual([[2,1],[2,0]]);
        expect(mlib.getDiagoArrayIntoMatrix([1,0],"ne-so",m1)).toEqual([[0,3]]);

    });

    it('setValToCoordinates', function(){
        var m1 = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ];

        expect(mlib.setValToCoordinates(9,m1,[[0,1],[1,3],[2,2]])).toEqual([
            [0,0,0],
            [9,0,0],
            [0,0,9],
            [0,9,0],
        ]);
    });



});