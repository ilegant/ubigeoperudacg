jQuery(document).ready(function(){
    loadDepartamentsbilling();
    loadDepartamentsshipping();
    
    jQuery('#billing_departament_dropdown').on('change', function(){
        loadProvincesbilling();
        loadDistrictsbilling();
        setPostcodebilling();
    });
    
    jQuery('#billing_province_dropdown').on('change', function(){
        loadDistrictsbilling();
        setPostcodebilling();
    });

    jQuery('#billing_district_dropdown').on('change', function(){
        setPostcodebilling();
    });
    
    jQuery('#shipping_departament_dropdown').on('change', function(){
        loadProvincesshipping();
        loadDistrictsshipping();
        setPostcodeshipping();
    });
    
    jQuery('#shipping_province_dropdown').on('change', function(){
        loadDistrictsshipping();
        setPostcodeshipping();
    });

    jQuery('#shipping_district_dropdown').on('change', function(){
        setPostcodeshipping();
    });
    
    jQuery('#billing_departament_dropdown').change();
    jQuery('#billing_province_dropdown').change();
    jQuery('#billing_district_dropdown').change();
    
    jQuery('#shipping_departament_dropdown').change();
    jQuery('#shipping_province_dropdown').change();
    jQuery('#shipping_district_dropdown').change();
    
    jQuery('#billing_departament_dropdown').select2();
    jQuery('#billing_province_dropdown').select2();
    jQuery('#billing_district_dropdown').select2();
    
    jQuery('#shipping_departament_dropdown').select2();
    jQuery('#shipping_province_dropdown').select2();
    jQuery('#shipping_district_dropdown').select2();
});

function loadDepartamentsbilling(){
    jQuery.each(_dacgdepartaments, function(n){
        var _departament = _dacgdepartaments[n],
            _option = '<option value="'+_departament.id+'">'+_departament.name+'</option>';
        jQuery('#billing_departament_dropdown').append(_option);
    });
    
    jQuery('#billing_departament_dropdown').val('15');
}

function loadProvincesbilling(){
    var _departament_id = jQuery('#billing_departament_dropdown').val(),
        _provinces = _dacgprovinces.filter(function(elem){ return elem.department_id == _departament_id; });
    
    jQuery('#billing_province_dropdown').html('');
    
    if(_provinces.length > 0){
        jQuery.each(_provinces, function(n){
            var _province = _provinces[n],
                _option = '<option value="'+_province.id+'">'+_province.name+'</option>';
            jQuery('#billing_province_dropdown').append(_option);
        });
    }
}

function loadDistrictsbilling(){
    var _departament_id = jQuery('#billing_departament_dropdown').val(),
        _province_id = jQuery('#billing_province_dropdown').val(),
        _districts = _dacgdistricts.filter(function(elem){ return elem.department_id == _departament_id && elem.province_id == _province_id; });
    
    jQuery('#billing_district_dropdown').html('');
    
    if(_districts.length > 0){
        jQuery.each(_districts, function(n){
            var _district = _districts[n],
                _option = '<option value="'+_district.id+'">'+_district.name+'</option>';
            jQuery('#billing_district_dropdown').append(_option);
        });
    }
}

function setPostcodebilling(){
    var _pc = jQuery('#billing_district_dropdown').val();
    
    jQuery('#billing_state').val(_pc);
    jQuery('#billing_state').change();
}

function setPostcodeshipping(){
    var _pc = jQuery('#shipping_district_dropdown').val(); 

    jQuery('#shipping_state').val(_pc);
    jQuery('#shipping_state').change();
}

function loadDepartamentsshipping(){
    jQuery.each(_dacgdepartaments, function(n){
        var _departament = _dacgdepartaments[n],
            _option = '<option value="'+_departament.id+'">'+_departament.name+'</option>';
        jQuery('#shipping_departament_dropdown').append(_option);
    });
    
    jQuery('#shipping_departament_dropdown').val('15');
}

function loadProvincesshipping(){
    var _departament_id = jQuery('#shipping_departament_dropdown').val(),
        _provinces = _dacgprovinces.filter(function(elem){ return elem.department_id == _departament_id; });
    
    jQuery('#shipping_province_dropdown').html('');
    
    if(_provinces.length > 0){
        jQuery.each(_provinces, function(n){
            var _province = _provinces[n],
                _option = '<option value="'+_province.id+'">'+_province.name+'</option>';
            jQuery('#shipping_province_dropdown').append(_option);
        });
    }
}

function loadDistrictsshipping(){
    var _departament_id = jQuery('#shipping_departament_dropdown').val(),
        _province_id = jQuery('#shipping_province_dropdown').val(),
        _districts = _dacgdistricts.filter(function(elem){ return elem.department_id == _departament_id && elem.province_id == _province_id; });
    
    jQuery('#shipping_district_dropdown').html('');
    
    if(_districts.length > 0){
        jQuery.each(_districts, function(n){
            var _district = _districts[n],
                _option = '<option value="'+_district.id+'">'+_district.name+'</option>';
            jQuery('#shipping_district_dropdown').append(_option);
        });
    }
}