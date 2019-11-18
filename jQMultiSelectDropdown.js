var dropDownSelection = [];
$(window).on("load",function() {
	var dropdownVal = $('#jQMultiSelectDropdown').html();
	var multiHTML = `<div class="dynamic-dropdown">
				<div class="expand-input">
					<div class="dynamic-elements">
					</div>
					<input class="search" placeholder="Please Choose a value..."/>
				</div>
				<ul class="search-dropdown" style="display:none;">
				</ul>
			</div>`;
			$('#jQMultiSelectDropdown').html(multiHTML);
	$('#jQMultiSelectDropdown .search-dropdown').html(dropdownVal);
	$('#jQMultiSelectDropdown .search').on("focus",function() {
		$('.search-dropdown').show();
	});
	$('#jQMultiSelectDropdown .search').on("keyup",function() {
		var inputVal = $(this).val();
		if (inputVal) {
			$('#jQMultiSelectDropdown .search-dropdown li').each(function() {
				if($(this).text().toLowerCase().indexOf(inputVal.toLowerCase()) === -1) {
					$(this).hide();
				} else {
					$(this).show();
				}
			});
		} else {
			$('#jQMultiSelectDropdown .search-dropdown li').show();
		}
	});
	$(window).on("click",function(ev) {
		if ($(ev.target).parents('.expand-input').length === 0) {
			$('#jQMultiSelectDropdown .search-dropdown').hide();
		}
	});
	$('#jQMultiSelectDropdown .search-dropdown li').on("click",function() {
		var liText = $(this).text();
		if (dropDownSelection.indexOf(liText) === -1) {
			dropDownSelection.push(liText);
			$('#jQMultiSelectDropdown .dynamic-elements').append('<span class="dynamic-selection">' + liText + '<span class="mark">&times;</span></span>');
		}
		$('#jQMultiSelectDropdown .search').val('');
		$('#jQMultiSelectDropdown .search-dropdown li').show();
		$('#jQMultiSelectDropdown .search-dropdown').hide();
	});

	$('#jQMultiSelectDropdown .dynamic-elements').on("click",'.mark',function() {
		var parentEl = $(this).parent();
		$(parentEl).find('.mark').remove();
		var inx = dropDownSelection.indexOf($(parentEl).text());
		dropDownSelection.splice(inx,1);
		$(parentEl).remove();
	});
});
