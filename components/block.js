'use strict';

polarity.export = PolarityComponent.extend({
  map: null,
  onDetailsOpened: function() {
    let map = this.get('map');
    let entity = this.get('block.data.details');

    if (map === null) {
      let myOptions = {
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: true,
        center: new google.maps.LatLng(entity.latitude, entity.longitude),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(this.$('.geo-integration-map')[0], myOptions);
      this.set('map', map);

      google.maps.event.addListenerOnce(map, 'idle', function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(new google.maps.LatLng(entity.latitude, entity.longitude));
      });
    }
  }
});
