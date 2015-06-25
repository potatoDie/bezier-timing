/**
 * [BezierPolynomial ]
 * @param {array of floats} d Control values (i.e. 1-dimensional control points)
 * returns Bezier formula
 */
function BezierPolynomial(d) {
	console.log ( d )
	/**
	 * Calculate binomial coefficients
	 * Recursion: Pascal's recurrence
	 * @param  {int} n >= 0
	 * @param  {int} k >= 0
	 * @return {int}  
	 */
	var binomial = function (n, k) {
		if (k == 0){
			return 1;
		}
		else if (n == 0) {
			return 0;
		}
		else {
			return binomial(n-1, k-1) + binomial(n-1,k);
		}
	}

	/**
	 * Create Bernstein basis polynomials
	 * @param  {@int} order number of basis functions
	 * @return {function} 
	 */
	var bernsteinPolynomials = (function (order) {
		// Calculate and store binomial coefficients
		var b =[];
		for (var i = 0; i <= order; i++) {
			b[i] = binomial(order, i);
		}
		console.log ( b )
		
		return (function(i,t){
					return b[i] * Math.pow(1-t, order-i) * Math.pow(t,i)
				});
	})(d.length - 1);

	return (function(t){
				var sum = 0;
				for ( var i = 0; i < d.length; i++ ) {
					sum += bernsteinPolynomials(i, t) * d[i];
				}
				return sum;

				// var total = d.reduce(function(sum,d, i){
				// 	return sum + bernsteinPolynomials(i, t) * d;
				// });

				// return total;

			});
}