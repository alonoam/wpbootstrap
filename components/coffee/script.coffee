$ = require 'jquery'

do fill = (item = 'the most creative template') ->
	$('.tagline').append "#{item}"
fill