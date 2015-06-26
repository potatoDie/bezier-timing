This code offers a timing function based on Bezier curves with one-dimensional control points.

This contrasts Bezier curves with 2-dimensional control points, like those in vector graphics, that are usually used for timing (a.k.a. easing) functions. CSS transitions use them too.

This is a simpler (and I think therefor more versatile) method, that can be used in JavaScript animations, whether you're working with Canvas, SVG or DOM. It's also very easy to use with GSAP. 

##Usage

	Bezier1D = BezierPolynomial([0, 0.2, 0.8, 1);

Bezier1D is the resulting timing function, taking an argument _t_ between 0 and 1. 

Within a GSAP tween define an ease with
	ease: new Ease(BezierPolynomial([0, 0.2, 0.8, 1))

##Opportunities
-	Create loops by giving the first and last control points the same value.
-	Add more _keyframes_ by supplying a longer list. 

##Example
For an example and an editor please visit http://www.potatodie.nl/bezier-timing/.