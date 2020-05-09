import React from "react";
import { CircleMarker, Map, Polyline, Tooltip, TileLayer } from "react-leaflet";

const center = [20.105716, 49.350789];
enum Color {
  earth = "#795548",
  plane = "#2196f3",
  boat = "#ffc107",
}
const TripOnMap = () => {
  return (
    <Map center={center} zoom={2} style={{ height: "500px" }}>
      <TileLayer
        attribution='<a href="http://stamen.com">Map tiles</a> by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />
      {data.map(({ color, points }, index) => (
        <Polyline
          color={color}
          positions={points.map((point) => point.coordinates)}
          key={index}
        />
      ))}
      {data
        .filter(({ color }) => color === Color.earth)
        .map(({ points }, i) => (
          <>
            {points.map((point, j) => (
              <CircleMarker
                center={point.coordinates}
                key={`${i}-${j}`}
                radius={0}
                color="#9e9e9e"
              >
                <Tooltip>
                  <span>{point.city}</span>
                </Tooltip>
              </CircleMarker>
            ))}
          </>
        ))}
    </Map>
  );
};

export default TripOnMap;
const data = [
  {
    color: Color.earth,
    points: [
      {
        coordinates: [48.879167, 2.329102],
        city: "Paris",
      },
      {
        coordinates: [50.611132, 3.076172],
        city: "Lille",
      },
      {
        coordinates: [51.027576, 2.331848],
        city: "Dunkerque",
      },
      {
        coordinates: [50.892639, 4.108887],
        city: "Gert",
      },
      {
        coordinates: [52.077818, 5.092163],
        city: "Utrecht",
      },
      {
        coordinates: [52.310997, 4.762573],
        city: "Amsterdam",
      },
    ],
  },
  {
    color: Color.plane,
    points: [
      {
        coordinates: [52.310997, 4.762573],
        city: "Amsterdam",
      },
      {
        coordinates: [-26.234302, 27.993164],
        city: "Johannesburg",
      },
    ],
  },
  {
    color: Color.earth,
    points: [
      {
        coordinates: [-26.234302, 27.993164],
        city: "Johannesburg",
      },
      {
        coordinates: [-29.878755, 30.981445],
        city: "Durban",
      },
      {
        coordinates: [-31.54109, 28.78418],
        city: "Mthatha1",
      },
      {
        coordinates: [-31.9842, 29.145355],
        city: "CoffeeBay",
      },
      {
        coordinates: [-32.241263, 28.905029],
        city: "Cwebe",
      },
      {
        coordinates: [-31.599592, 28.773193],
        city: "Mthatha2",
      },
      {
        coordinates: [-33.916013, 25.592651],
        city: "PE",
      },
      {
        coordinates: [-34.234512, 18.435059],
        city: "CapTown",
      },
      {
        coordinates: [-33.733477, 18.448792],
        city: "KeithJohn",
      },
      {
        coordinates: [-28.730937, 17.612457],
        city: "Noordover",
      },
      {
        coordinates: [-28.351525, 17.40097],
        city: "Ausenker",
      },
      {
        coordinates: [-27.921924, 17.491264],
        city: "AiAis",
      },
      {
        coordinates: [-28.730937, 17.612457],
        city: "Noordover2",
      },
      {
        coordinates: [-26.578702, 18.134651],
        city: "Katmens",
      },
      {
        coordinates: [-26.645311, 15.15255],
        city: "Luderitz",
      },
      {
        coordinates: [-26.665255, 16.266804],
        city: "Aus",
      },
      {
        coordinates: [-24.486758, 15.801258],
        city: "Sesriem",
      },
      {
        coordinates: [-23.888349, 16.006522],
        city: "Solitaire",
      },
      {
        coordinates: [-22.540147, 17.095757],
        city: "Windhoek",
      },
      {
        coordinates: [-17.506557, 14.988098],
        city: "Outapie",
      },
      {
        coordinates: [-19.566098, 18.116627],
        city: "Grootfontein",
      },
      {
        coordinates: [-17.929416, 19.758911],
        city: "Rundu",
      },
      {
        coordinates: [-17.502792, 24.276009],
        city: "Katima",
      },
      {
        coordinates: [-17.856231, 25.857697],
        city: "Livingstone",
      },
      {
        coordinates: [-17.02002, 26.477051],
        city: "Kalomo",
      },
      {
        coordinates: [-16.8098, 26.987915],
        city: "Choma",
      },
      {
        coordinates: [-15.416615, 28.278809],
        city: "Lusaka",
      },
      {
        coordinates: [-10.127399, 30.936098],
        city: "Chilubula",
      },
      {
        coordinates: [-11.83039, 31.45237],
        city: "Mpika",
      },
      {
        coordinates: [-9.331864, 32.75588],
        city: "Naconde",
      },
      {
        coordinates: [-9.696874, 33.2761],
        city: "Chitipa",
      },
      {
        coordinates: [-10.104754, 33.562431],
        city: "Kalowe",
      },
      {
        coordinates: [-10.578272, 33.795204],
        city: "Nyaka",
      },
      {
        coordinates: [-11.02048, 33.857617],
        city: "Rumphi",
      },
      {
        coordinates: [-11.462865, 34.022541],
        city: "Mzuzu",
      },
    ],
  },
  {
    color: Color.earth,
    points: [
      {
        coordinates: [-11.607007, 34.294252],
        city: "NkhataBay",
      },
      {
        coordinates: [-12.693263, 34.809837],
        city: "Metangula",
      },
      {
        coordinates: [-13.31279, 35.235558],
        city: "Lichinga",
      },
      {
        coordinates: [-14.799613, 36.534176],
        city: "Cuamba",
      },
      {
        coordinates: [-15.116542, 39.267883],
        city: "Nampula",
      },
      {
        coordinates: [-15.03698, 40.731382],
        city: "IsladeMozambique",
      },
      {
        coordinates: [-14.912938, 39.962769],
        city: "JunctionNampulaTanzanie",
      },
      {
        coordinates: [-13.63798, 39.844666],
        city: "Ocua",
      },
      {
        coordinates: [-11.350797, 40.350037],
        city: "Mocimboa",
      },
      {
        coordinates: [-10.752366, 40.462646],
        city: "Palma",
      },
      {
        coordinates: [-10.123005, 39.611206],
        city: "Mkaya",
      },
      {
        coordinates: [-6.811898, 39.27063],
        city: "DarEsSalam",
      },
      {
        coordinates: [-5.069058, 39.111328],
        city: "Tanga",
      },
      {
        coordinates: [-4.039618, 39.660645],
        city: "Monbasa",
      },
      {
        coordinates: [-3.052754, 38.496094],
        city: "Voi",
      },
      {
        coordinates: [-1.296276, 36.804199],
        city: "Nairobi",
      },
    ],
  },
  {
    color: Color.plane,
    points: [
      {
        coordinates: [-1.296276, 36.804199],
        city: "Nairobi2",
      },
      {
        coordinates: [30.026894, 31.224518],
        city: "LeCaire",
      },
    ],
  },
  {
    color: Color.earth,
    points: [
      {
        coordinates: [30.026894, 31.224518],
        city: "LeCaire2",
      },
      {
        coordinates: [29.984974, 32.523823],
        city: "Suez",
      },
      {
        coordinates: [27.870645, 34.285583],
        city: "Sharm",
      },
      {
        coordinates: [29.550761, 34.944763],
        city: "Eilat",
      },
      {
        coordinates: [31.257716, 35.211525],
        city: "Arad",
      },
      {
        coordinates: [32.03602, 34.771729],
        city: "TelAviv",
      },
      {
        coordinates: [31.784217, 35.222168],
        city: "Jerusalem",
      },
      {
        coordinates: [32.694866, 35.299072],
        city: "Nazareth",
      },
      {
        coordinates: [31.784217, 35.222168],
        city: "Jerusalem2",
      },
      {
        coordinates: [31.989442, 35.222168],
        city: "Ramallah",
      },
      {
        coordinates: [32.03602, 34.771729],
        city: "TelAviv2",
      },
    ],
  },
  {
    color: Color.plane,
    points: [
      {
        coordinates: [32.03602, 34.771729],
        city: "TelAviv3",
      },
      {
        coordinates: [56.949468, 24.108124],
        city: "Riga",
      },
    ],
  },
  {
    color: Color.earth,
    points: [
      {
        coordinates: [56.949468, 24.108124],
        city: "Riga",
      },
      {
        coordinates: [54.559323, 23.389893],
        city: "Marijampole",
      },
      {
        coordinates: [54.965002, 24.0271],
        city: "Kaunasss",
      },
      {
        coordinates: [55.528631, 25.114746],
        city: "Aniksciais",
      },
      {
        coordinates: [54.684947, 25.28183],
        city: "Vilnius",
      },
      {
        coordinates: [56.949468, 24.108124],

        city: "Riga2",
      },
      {
        coordinates: [55.767303, 37.668915],
        city: "Moscou",
      },
      {
        coordinates: [52.27404, 104.301453],
        city: "Irkutsk",
      },
      {
        coordinates: [52.046579, 113.501129],
        city: "Tchita",
      },
      {
        coordinates: [49.61071, 117.471313],
        city: "Manzhouli",
      },
      {
        coordinates: [43.834527, 125.375977],
        city: "Escal_manzhouli_pekin1",
      },
      {
        coordinates: [41.836828, 123.310547],
        city: "Escale_manzhouli_pekin2",
      },
      {
        coordinates: [39.909736, 116.367188],
        city: "Pékin",
      },
      {
        coordinates: [34.281049, 108.930817],
        city: "Xian",
      },
      {
        coordinates: [30.66981, 104.067993],
        city: "Chengdu",
      },
      {
        coordinates: [29.646288, 91.143951],
        city: "Lhassa",
      },
      {
        coordinates: [27.719397, 85.351825],
        city: "Kathmandu",
      },
      {
        coordinates: [26.657278, 87.335815],
        city: "Itahari",
      },
      {
        coordinates: [26.39925, 87.260284],
        city: "Frontiere",
      },
      {
        coordinates: [26.6628, 87.354355],
        city: "Itahari2",
      },
      {
        coordinates: [26.659732, 88.115845],
        city: "Bhadrapur",
      },
      {
        coordinates: [26.676913, 88.412476],
        city: "Siliguli",
      },
      {
        coordinates: [27.002855, 88.26416],
        city: "Darjeeling",
      },
      {
        coordinates: [26.382028, 88.316345],
        city: "route_patna",
      },
      {
        coordinates: [25.606856, 85.130997],
        city: "Patna",
      },
      {
        coordinates: [23.664651, 84.748535],
        city: "Chandwa",
      },
      {
        coordinates: [25.324167, 82.957764],
        city: "Benares",
      },
      {
        coordinates: [25.438934, 81.850891],
        city: "Allahabad",
      },
      {
        coordinates: [28.642389, 77.23114],
        city: "Delhi",
      },
      {
        coordinates: [27.178302, 78.010483],
        city: "Agra",
      },
      {
        coordinates: [27.093899, 77.660894],
        city: "Fathepur",
      },
      {
        coordinates: [26.020691, 76.347084],
        city: "SawaiMadopur",
      },
      {
        coordinates: [25.171077, 75.856819],
        city: "Kota",
      },
      {
        coordinates: [25.440484, 75.639296],
        city: "Bundi",
      },
      {
        coordinates: [26.452747, 74.648552],
        city: "Ajmer",
      },
      {
        coordinates: [26.914723, 75.794449],
        city: "Jaipur",
      },
      {
        coordinates: [28.6448, 77.230911],
        city: "Delhi2",
      },
      {
        coordinates: [20.610934, 72.926359],
        city: "Valsad",
      },
      {
        coordinates: [19.04957, 72.868423],
        city: "Bombay",
      },
    ],
  },
  {
    color: Color.plane,
    points: [
      {
        coordinates: [19.04957, 72.868423],
        city: "Bangkok",
      },
      {
        coordinates: [13.742942, 100.470429],
        city: "Bangkok",
      },
    ],
  },
  {
    color: Color.earth,
    points: [
      {
        coordinates: [13.742942, 100.470429],
        city: "Bangkok2",
      },
      {
        coordinates: [14.41872, 100.518951],
        city: "Ayutthaya",
      },
      {
        coordinates: [15.623037, 100.101013],
        city: "NakhonSawan",
      },
      {
        coordinates: [16.878147, 99.117737],
        city: "Tak",
      },
      {
        coordinates: [16.723892, 98.567047],
        city: "MaeSot",
      },
      {
        coordinates: [16.381634, 98.704376],
        city: "Chutes",
      },
      {
        coordinates: [17.020896, 98.514862],
        city: "MaeRamat",
      },
      {
        coordinates: [17.065537, 99.080658],
        city: "BanTak",
      },
      {
        coordinates: [18.277172, 99.498138],
        city: "Lampang1",
      },
      {
        coordinates: [18.787584, 98.979034],
        city: "ChiangMai",
      },
      {
        coordinates: [19.865755, 99.830475],
        city: "ChiangRai",
      },
      {
        coordinates: [19.174139, 99.909897],
        city: "Phayao",
      },
      {
        coordinates: [18.277172, 99.498138],
        city: "Lampang2",
      },
      {
        coordinates: [18.787584, 98.979034],
        city: "Chiangmai2",
      },
      {
        coordinates: [19.391477, 98.426514],
        city: "Pai",
      },
      {
        coordinates: [19.108839, 98.041992],
        city: "SoPong",
      },
      {
        coordinates: [18.787584, 98.979034],
        city: "Chiangmai3",
      },
      {
        coordinates: [17.963058, 100.063477],
        city: "Phrae",
      },
      {
        coordinates: [16.830832, 100.294189],
        city: "Phitsanulok",
      },
      {
        coordinates: [15.697086, 100.123901],
        city: "NakonSawan2",
      },
      {
        coordinates: [14.237762, 101.101685],
        city: "NakonNayok",
      },
      {
        coordinates: [13.800741, 102.095947],
        city: "SaKaeo",
      },
      {
        coordinates: [12.918907, 102.260742],
        city: "PongNamRon",
      },
      {
        coordinates: [13.10088, 103.200073],
        city: "Battambang",
      },
      {
        coordinates: [13.346865, 103.859253],
        city: "SiemReap",
      },
      {
        coordinates: [11.522415, 104.891281],
        city: "PhnomPenh",
      },
      {
        coordinates: [10.703792, 103.787842],
        city: "Sihanoukville",
      },
      {
        coordinates: [10.962764, 104.787598],
        city: "Takeo",
      },
      {
        coordinates: [10.682201, 105.084229],
        city: "ChauDoc",
      },
      {
        coordinates: [10.017539, 105.79834],
        city: "CanTho",
      },
      {
        coordinates: [10.806328, 106.622314],
        city: "HCMC",
      },
      {
        coordinates: [11.05443, 108.429565],
        city: "MuiNe",
      },
      {
        coordinates: [12.677856, 108.05603],
        city: "BuonMaThuot",
      },
      {
        coordinates: [14.338904, 108.006592],
        city: "KonTum",
      },
      {
        coordinates: [15.520734, 108.500977],
        city: "TamKy",
      },
      {
        coordinates: [17.438004, 106.622314],
        city: "DongHoi",
      },
      {
        coordinates: [19.062118, 105.600586],
        city: "Vinh",
      },
      {
        coordinates: [20.231275, 105.996094],
        city: "NinhBinh",
      },
      {
        coordinates: [20.82801, 106.699219],
        city: "HaiPhong",
      },
      {
        coordinates: [20.72786, 107.045288],
        city: "CatBa",
      },
      {
        coordinates: [20.971699, 107.037048],
        city: "Halong",
      },
      {
        coordinates: [21.019137, 105.843658],
        city: "Hanoi",
      },
      {
        coordinates: [22.338697, 103.845348],
        city: "Sapa",
      },
      {
        coordinates: [22.542155, 103.292084],
        city: "LaiChau",
      },
      {
        coordinates: [21.388295, 103.013306],
        city: "DienBien",
      },
      {
        coordinates: [20.679045, 101.988831],
        city: "MuangXai",
      },
      {
        coordinates: [19.886284, 102.135429],
        city: "LuangPrabang",
      },
      {
        coordinates: [18.934055, 102.449741],
        city: "VangVieng",
      },
      {
        coordinates: [17.965344, 102.614021],
        city: "Ventiane",
      },
      {
        coordinates: [16.40447, 102.832031],
        city: "KhonKaen",
      },
      {
        coordinates: [17.602139, 100.129395],
        city: "Uttaradit",
      },
      {
        coordinates: [18.771115, 99.030762],
        city: "ChiangMai",
      },
      {
        coordinates: [13.742942, 100.470429],
        city: "Bangkok_fin",
      },
    ],
  },
  {
    color: Color.plane,
    points: [
      {
        coordinates: [13.742942, 100.470429],
        city: "Bkk",
      },
      {
        coordinates: [48.879167, 2.329102],
        center: "1",
        city: "Paris",
      },
    ],
  },
];
