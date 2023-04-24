'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html.original": "096b65fba254a7dd9d85cbeaf7e52ea8",
"version.json": "6cf8b05506c81dcd40c2e2ea0864ba60",
"firebase-config-web.js": "54b3e06e180fce0d4bb230c048c48b4d",
"index.html": "734905641e5ad3ae2b0a3d05f4b11a87",
"/": "734905641e5ad3ae2b0a3d05f4b11a87",
"app_icon.png": "ef52c43fbc9d09a682e05b1d2883db64",
"main.dart.js": "e0a9f3b2924313f333bdabf0114b886c",
"firebase-app.js": "58a198434f551fd90f9f355acc4cfd1f",
"font.ttf": "8a743c206b0d21c667864106a9d97e89",
"hls.js": "b2c4eec1cd835d3a2d964c889b9f44a6",
"image/loader.gif": "e3214a45b7612af9a84787a302262fe3",
"loading-screen.css": "3d4e7c3ee9ed043766df8b3dd8531504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "abe5911756c78d17a8b67a113f4a62b2",
"manifest.json": "760958dbc0b47040d528c0c3747fddac",
"serviceworker.js": "e2bc705c66534aa4197a148081b05e00",
"constants.css": "a358cf0d601ee9ade34b8fbfc81e6d24",
"firebase-messaging.js": "7113324df060c0226f882a9d527fd6c7",
"pdf_builder_worker.js": "a018c0fc6da975672d8c863699283bc0",
"assets/AssetManifest.json": "6e57298cc179f6f5b720c2150123df48",
"assets/NOTICES": "74084dcc93126f76c9098ccb5d6edadb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/sharpsell/assets/images/ic_refresh_new.svg": "f4f66d99aa6965cda5d06a53fd3ce33d",
"assets/packages/sharpsell/assets/images/game_answer_wrong.svg": "bf1e5b3c6e61476ebf09e135a67a2c36",
"assets/packages/sharpsell/assets/images/ic_phone.svg": "9c794e708bc657ff1a87c83492869fbf",
"assets/packages/sharpsell/assets/images/game_quiz_web_bg.svg": "90a3391b0d218ba05096e7773547f3c0",
"assets/packages/sharpsell/assets/images/game_quiz_top_glow.svg": "9a345a9490a547eb5e8249ab73d7942e",
"assets/packages/sharpsell/assets/images/ic_delete.svg": "15d65cd7d2a816a98c5ac1a509edb784",
"assets/packages/sharpsell/assets/images/smartsell_no_content_added.svg": "a83101c83d9914bc5df345a00e83bb8d",
"assets/packages/sharpsell/assets/images/basketball_quiz_bg_web.svg": "f71fb84aec6ae17c13ac3d9add65b614",
"assets/packages/sharpsell/assets/images/game_quiz_question_bg_web.svg": "5a9f306bd003d557f91b499a576a37dd",
"assets/packages/sharpsell/assets/images/record_again.svg": "141ea280b346c80b05b7defb3d767723",
"assets/packages/sharpsell/assets/images/game_answer_correct_web.svg": "9ce83e61f1e0f978d8cc3b482f1f686a",
"assets/packages/sharpsell/assets/images/ic_fullscreen.svg": "c72515d050c6aa1c555777da9e8299b2",
"assets/packages/sharpsell/assets/images/ic_earned_certificate.svg": "40a13d32d26418f3dd3cf36361d3a53a",
"assets/packages/sharpsell/assets/images/car_quiz_bg_web.svg": "0f25590cf37a0ae5a1943a1613f491dd",
"assets/packages/sharpsell/assets/images/ic_launchpad_play.svg": "8526a14ed1a4897c457994779761d567",
"assets/packages/sharpsell/assets/images/ic_camera.svg": "3d31cf865ebc2ad0dabeee6a6748550a",
"assets/packages/sharpsell/assets/images/ic_download_complete.svg": "cc8567a8b0e421c7028b15f6192f8eee",
"assets/packages/sharpsell/assets/images/car_quiz_bg.svg": "ea2a8b3fb86050d85290a84952f917c3",
"assets/packages/sharpsell/assets/images/ic_close.svg": "54f759eebadccff13a6f26ea0d664846",
"assets/packages/sharpsell/assets/images/game_center_glow.svg": "a96263cabed9244ef6282bf2bbf4da6e",
"assets/packages/sharpsell/assets/images/ic_completed.svg": "20a2331a18f2f715d2a84a38335328b9",
"assets/packages/sharpsell/assets/images/ic_pdf_big.svg": "4dab68a53fa3f9dd247ade6ecd81f40b",
"assets/packages/sharpsell/assets/images/ic_contact_picker.svg": "d0b9e0e5ab1ead6c71eb50e148815647",
"assets/packages/sharpsell/assets/images/game_neutral_answer_bg_web.svg": "bbe648a2c95cfdec2ed1475819a50506",
"assets/packages/sharpsell/assets/images/Video_thumbnail-min.png": "0c965fcdeb1c7b24bab22d363f0c1c76",
"assets/packages/sharpsell/assets/images/ic_whatsapp.png": "0f5872a1147a1a30a5e82dc9da66eb1d",
"assets/packages/sharpsell/assets/images/ic_certificate.svg": "05a6bb53d915d07a9d437168e5666bfb",
"assets/packages/sharpsell/assets/images/ic_signature_details.svg": "07a930ec7239a3f471d105f0b4f05721",
"assets/packages/sharpsell/assets/images/game_quiz_background.svg": "afb6fa1d0c6df789d2af5011f493af5d",
"assets/packages/sharpsell/assets/images/ss_ic_insert_photo_black_24dp.png": "506290573a0267ef4a905bc49feeb8ff",
"assets/packages/sharpsell/assets/images/ic_padlock.svg": "27abc22250f4fc6301543db648072918",
"assets/packages/sharpsell/assets/images/ic_oh_snap.svg": "8f61595cd6480d727b314de3bce0d229",
"assets/packages/sharpsell/assets/images/ic_translation.svg": "7276eabe141525f1b02d3f87ab3e32e9",
"assets/packages/sharpsell/assets/images/ic_profile_pic_default.svg": "a8065ffcca87efb6c07782628dde96b1",
"assets/packages/sharpsell/assets/images/ic_drop_down_arrow.svg": "5f6d7384704fd1e4241ecff9b2700915",
"assets/packages/sharpsell/assets/images/smartsell_no_search_result.svg": "0c98b50feb8d02672b7f81c8926d76eb",
"assets/packages/sharpsell/assets/images/ic_launchpad_weblink.svg": "857be3d98e2c9e7489418cfe440706c7",
"assets/packages/sharpsell/assets/images/ic_gallery.svg": "738fbe1be01dec40a36357c4a24f7b6c",
"assets/packages/sharpsell/assets/images/basketball_quiz_basket.svg": "7f8c20f742c37a5e84db7e8b4dd3a802",
"assets/packages/sharpsell/assets/images/basketball_quiz_bg.svg": "b96cc90a82e02b458add24c7c4f39434",
"assets/packages/sharpsell/assets/images/ic_launchpad_pause.svg": "ed4dc56f2e13da65178b37bb4447593f",
"assets/packages/sharpsell/assets/images/game_answer_correct.svg": "82514124e991113702afcd20bb6b68c3",
"assets/packages/sharpsell/assets/images/ic_contact_picker_disabled.svg": "b1c5ff4bc2b58860558fb3621a3c8d1a",
"assets/packages/sharpsell/assets/images/ic_sync.svg": "b480a995315e1fe95bd2febafbf790eb",
"assets/packages/sharpsell/assets/images/ic_failed.svg": "2cdf6495fdb0f5d0bbc31c4c335bdc8e",
"assets/packages/sharpsell/assets/images/ic_launchpad_share.svg": "7e27e2fdb120f7278e296ce6548c2b4a",
"assets/packages/sharpsell/assets/images/game_answer_bg.svg": "ac2b7543545c746843be7b2c5ec6a62e",
"assets/packages/sharpsell/assets/images/ss_content_placeholder.svg": "ecf169360f78eec270c3a48ac1319776",
"assets/packages/sharpsell/assets/images/game_bottom_glow.svg": "09ea6fae4a3736b533145400674392c6",
"assets/packages/sharpsell/assets/images/car_quiz_grey_bg.svg": "1c35337943b101ff568df6dff33a61f9",
"assets/packages/sharpsell/assets/images/ic_warning.svg": "ff6c8873f7870f989b1fc502827e19c8",
"assets/packages/sharpsell/assets/images/ic_empty_screen_sharpsell_logo.svg": "0e4964f3de6a84c2cf097f2082f3a04f",
"assets/packages/sharpsell/assets/images/game_quiz_bottom_glow_web.svg": "cef30f7465c8829abbfcf8d68cae0c6f",
"assets/packages/sharpsell/assets/images/ic_arrow_down.svg": "6e86ddb940febb112b6b1cc54df11429",
"assets/packages/sharpsell/assets/images/ic_caution.svg": "e87ae58c0c0d3d0339e3ee195e326859",
"assets/packages/sharpsell/assets/images/ic_email.svg": "219c417d995de496531c83396eef6db6",
"assets/packages/sharpsell/assets/images/ic_view_in_browser.svg": "a647022be95b13b7465fe1a1fd9ac81e",
"assets/packages/sharpsell/assets/images/ic_privacy_policy.svg": "1fcbeca51eb529124159a1cfe669b3ce",
"assets/packages/sharpsell/assets/images/ic_verified.png": "ad48f77074ff4920c99789b6b265b72c",
"assets/packages/sharpsell/assets/images/ic_quick_link_1.png": "ab9ed81832c989a4db9534423a43645e",
"assets/packages/sharpsell/assets/images/whatsapp_outlined.svg": "e3d9011cb756848587a9dd6a9ed6a83d",
"assets/packages/sharpsell/assets/images/ic_play.svg": "9e1b55a937be0857be8bfb08590cb198",
"assets/packages/sharpsell/assets/images/ic_back.svg": "eb62945f7bb978589fd1a67dccf4acf9",
"assets/packages/sharpsell/assets/images/game_answer_bg_web.svg": "095d860cb16ad55863921f38d37d218c",
"assets/packages/sharpsell/assets/images/ic_download.svg": "a6c2d67f25bd7e69cb328e32fc4df5dd",
"assets/packages/sharpsell/assets/images/game_answer_wrong_web.svg": "33225df86fb31b0c0ed529045e2dfab0",
"assets/packages/sharpsell/assets/images/ic_quick_link_2.png": "8d771df9c2684fab3c6f5ff43be81c4c",
"assets/packages/sharpsell/assets/images/ic_quick_link_3.png": "ea098b4480f0e4f32973d25e41dbe1bc",
"assets/packages/sharpsell/assets/images/ic_copy.svg": "360e043d44cf8e1322ba9785bed728fa",
"assets/packages/sharpsell/assets/images/smartsell_no_card_added.svg": "72897c19a0d89062f2ccbf23bd5d8704",
"assets/packages/sharpsell/assets/images/ic_arrow_up.svg": "b1182b0de035c6892313782c5103c596",
"assets/packages/sharpsell/assets/images/no_content.svg": "420b378547635f0e5c28b59a42d7416f",
"assets/packages/sharpsell/assets/images/ic_next.svg": "c5651f047a2ff19d342b552180816fe4",
"assets/packages/sharpsell/assets/images/ic_launchpad_close.svg": "994feed64df0879d88351e3ecc682ccb",
"assets/packages/sharpsell/assets/images/ic_star.svg": "e45b9b6775a04946177244239dffaa07",
"assets/packages/sharpsell/assets/images/game_neutral_answer_bg.svg": "2e17b43d5bde435e218ec2251e6213e2",
"assets/packages/sharpsell/assets/images/ic_logout.svg": "1ba2e0f63c79d937ef11cfda47b94688",
"assets/packages/sharpsell/assets/video_challenge/images/vc_category_placeholder.svg": "7c3f2ddac662fd08e356aa88fe9d857f",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_half_yellow.svg": "7b9449aada698a7115fea272d5fb2727",
"assets/packages/sharpsell/assets/video_challenge/images/ic_videos.svg": "690d70a1f9d79688eda9720f7036fcff",
"assets/packages/sharpsell/assets/video_challenge/images/ic_play_top_rated_video.svg": "cbc4e99559b5bbc2067b6c8cdf7711dc",
"assets/packages/sharpsell/assets/video_challenge/images/upload_success.png": "8feb737ecee1be5151ba84a9cb7176bf",
"assets/packages/sharpsell/assets/video_challenge/images/talk.png": "7e6169fa20e9b5126677772a9288d7a0",
"assets/packages/sharpsell/assets/video_challenge/images/ic_confetti_dialog.svg": "473c5e36fbb9ccba910a4de86c2db047",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_full_yellow.svg": "029ec3466364740cb3fbb28126a88e83",
"assets/packages/sharpsell/assets/video_challenge/images/ic_quotes.png": "2d41d18f2e1de90ee0e8b13fed0d7296",
"assets/packages/sharpsell/assets/video_challenge/images/ic_like.svg": "db5f00cc6a09c8e66c0da789aed19b18",
"assets/packages/sharpsell/assets/video_challenge/images/ic_small_camera.svg": "d15ff8b7eb6c3470df55b6c126f782a4",
"assets/packages/sharpsell/assets/video_challenge/images/timer2.png": "9af646710e0e79f10f6c103f177b90db",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_9.webp": "d3bb97dd89d359d6840a7a0bff5e9efd",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_5.webp": "868d1f42020a0bc42afde72c8e70184f",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_4.webp": "5668501c6f53686600419cd75e05f4f8",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_8.webp": "4842239d772689b40025fac028236800",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_3.webp": "e927951b375ea874b79bd07b04e963ef",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_2.webp": "b8b6452d2cbe4dd4f4010e132e05291a",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_1.webp": "ee6f9bce17fddcf3452b3ece3eaebb6b",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_7.webp": "816462a92e007091923be062edea7ab6",
"assets/packages/sharpsell/assets/video_challenge/images/open_challenge_banners/vc_open_challenge_banner_6.webp": "781e72d1688ecb0c4c2a597f99fc14b4",
"assets/packages/sharpsell/assets/video_challenge/images/queue.png": "8c62cef064f88d1acc4cbb17e005f332",
"assets/packages/sharpsell/assets/video_challenge/images/meter.png": "35e78eae8f40df3db76b6112d76d1fa2",
"assets/packages/sharpsell/assets/video_challenge/images/timer.png": "7f5c725ba13a5317d1ebd701d8c4615b",
"assets/packages/sharpsell/assets/video_challenge/images/ic_%2520hourglass.svg": "e79d96d8396ac4ad89eda9a8888247df",
"assets/packages/sharpsell/assets/video_challenge/images/ic_warning.svg": "f84d7259e26cf74a6aca645b84e5dfba",
"assets/packages/sharpsell/assets/video_challenge/images/ic_caution.svg": "07f04f50b2d562ebee95490e291f6253",
"assets/packages/sharpsell/assets/video_challenge/images/delete.png": "ead3c5f888b8362dba3a1263dc9d4cf1",
"assets/packages/sharpsell/assets/video_challenge/images/upload_failed.png": "b1c05e6eda5745db54e211a4ebb73d49",
"assets/packages/sharpsell/assets/video_challenge/images/ic_description.svg": "c300206efc35ea40541e7298a1ebce31",
"assets/packages/sharpsell/assets/video_challenge/images/ic_play.svg": "f0765389850f30790a843532fb893706",
"assets/packages/sharpsell/assets/video_challenge/images/ic_confetti.svg": "4994929a73b24d9a932541b8432576fc",
"assets/packages/sharpsell/assets/video_challenge/images/vc_star_empty_grey.svg": "dbdd381b0c5014fd90ee9364b928ef31",
"assets/packages/sharpsell/assets/video_challenge/images/ic_lamp.svg": "3c99744c8da4eca8455bffe7833331f4",
"assets/packages/sharpsell/assets/video_challenge/images/description.svg": "b1b77e0981ca2d2351dd075b3d69d516",
"assets/packages/sharpsell/assets/video_challenge/images/vc_ic_camera_rotate.svg": "ba278473ea89aff847b57d1c9cfe2639",
"assets/packages/sharpsell/assets/video_challenge/images/ic_play_expired.svg": "27cfe1852d517a73cb03326ef267ad55",
"assets/packages/sharpsell/assets/video_challenge/images/lamp.png": "94abad3bd6101b24ff61ba858c3a271e",
"assets/packages/sharpsell/assets/video_challenge/images/ic_closed_quotes.png": "471382fec0c564b5e03622a92ba342dd",
"assets/packages/sharpsell/assets/js/base64.js": "12632802c69217fc89915462673a5d00",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content_added_2.svg": "2fb23fafcf174dd3461585097915d6d4",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content_added.svg": "72897c19a0d89062f2ccbf23bd5d8704",
"assets/packages/sharpsell/assets/timer_challenge/icons/fuel.png": "4ece7af09d482aacbf00ae1bd638a53f",
"assets/packages/sharpsell/assets/timer_challenge/icons/questions.png": "bd50996064d023626cb67719232e870d",
"assets/packages/sharpsell/assets/timer_challenge/icons/calendar.png": "de5596b74a67504b9586ca3eaa90a574",
"assets/packages/sharpsell/assets/timer_challenge/icons/clock.png": "bf18221aec4826b2e821680beb5cdf51",
"assets/packages/sharpsell/assets/timer_challenge/icons/delete.png": "5ba429349ad0f3f6c3d02f1400fd282c",
"assets/packages/sharpsell/assets/timer_challenge/icons/coin.png": "0d64d169588ebbb70e5d66cc7b2f6820",
"assets/packages/sharpsell/assets/timer_challenge/icons/no_content.svg": "22f97317d55c9c7b448fcccaf44ba946",
"assets/packages/sharpsell/assets/timer_challenge/icons/duration.png": "9fd04bb7426ba77ba3c304a11c0bc52b",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_three.riv": "a998d02bd2e85e7ef838e3f1b24f3ae7",
"assets/packages/sharpsell/assets/timer_challenge/animations/rocket_zoom_in.riv": "09432a333c0bf7e1bfd3f80e667a1bae",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_four.riv": "42b8c21551b6fef32dcf584183f5d64c",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_two.riv": "6caa5a2d4be83e26b1dde1230fc513c7",
"assets/packages/sharpsell/assets/timer_challenge/animations/astronout.riv": "f59ff182e5c108b1afc0f32770c1101f",
"assets/packages/sharpsell/assets/timer_challenge/animations/Bg_Loop.json": "187a35ff97f51c9ff045eccae3ec02ec",
"assets/packages/sharpsell/assets/timer_challenge/animations/astronout2.riv": "fc6eb0fe5f7bb0cb74086d81aa694056",
"assets/packages/sharpsell/assets/timer_challenge/animations/countdown_bg.riv": "7c673cea12bc149d2e1af7aaa2165524",
"assets/packages/sharpsell/assets/timer_challenge/animations/rocket_hover.riv": "48f36aeb4b6b64f90ff28ec3e520caed",
"assets/packages/sharpsell/assets/leadgen/images/ic_phone.svg": "fbea0c8e73b1033a7d84d28197a0d5db",
"assets/packages/sharpsell/assets/leadgen/images/ic_back_arrow.svg": "f1abfc9afde0328b07bfcd645c249d23",
"assets/packages/sharpsell/assets/leadgen/images/ic_continue_subtopic_arrow.svg": "0e604ff01e1278e0683c5bec51a2152a",
"assets/packages/sharpsell/assets/leadgen/images/ic_profile.svg": "51952d1cd140cd4f5a7ddfe120f4a0bd",
"assets/packages/sharpsell/assets/leadgen/images/ic_speaker_new.svg": "36c43a3ef374c9bac6b626e2025fbd14",
"assets/packages/sharpsell/assets/leadgen/images/ic_linkedin.png": "09571b2e203d364bbec93e8548b438f5",
"assets/packages/sharpsell/assets/leadgen/images/ic_contact_new.png": "e0106106720b6cb39a6bfa1f899e5655",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future.png": "38a47ac4afadfabe296556629e1782fc",
"assets/packages/sharpsell/assets/leadgen/images/ic_back_new.png": "958b502f7de0095f2f0f88b4bf7d426c",
"assets/packages/sharpsell/assets/leadgen/images/ic_mwpa.png": "9363ee033f2dc911a5f8553caa4a4398",
"assets/packages/sharpsell/assets/leadgen/images/ic_whatsapp_2.png": "2166ccb70c4f570e59b8b37a5021c505",
"assets/packages/sharpsell/assets/leadgen/images/ic_dialog.png": "67c5122e8b3e69b61776f9d1017a4779",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future.svg": "fcbf455962e4cd3066ede4b5111758e2",
"assets/packages/sharpsell/assets/leadgen/images/ic_whatsapp.png": "0c7beff5ac6b4b7cd2b777aa3359302a",
"assets/packages/sharpsell/assets/leadgen/images/ic_info.png": "733dcdb8fc03a67dd991ef4f37a910e3",
"assets/packages/sharpsell/assets/leadgen/images/ic_speaker_new.png": "bebae621c73206e11fadcc8e509407b1",
"assets/packages/sharpsell/assets/leadgen/images/ic_twitter.png": "3b41b8e41ee16b1f7908a6a5f1b89911",
"assets/packages/sharpsell/assets/leadgen/images/ic_sad.png": "6f2c7ecbc3877cc01a1abb26ce5e0c39",
"assets/packages/sharpsell/assets/leadgen/images/ic_retirement.png": "a6771fa6d4026e05775e160913109c6c",
"assets/packages/sharpsell/assets/leadgen/images/ic_navigation_logo.svg": "90b89e99c4adfd46a0946c027f6f0cf1",
"assets/packages/sharpsell/assets/leadgen/images/ic_sync.svg": "f3d0ed63e7d8c232e1b28cbee8176e2f",
"assets/packages/sharpsell/assets/leadgen/images/ic_placeholder.png": "f43a7da88e6c276e5b02d884a650aa7f",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_health_index.png": "382aeabb03eef2830d256948feb5831d",
"assets/packages/sharpsell/assets/leadgen/images/ic_fb.png": "2f1d4f3783aa035a1a969379c0cd0024",
"assets/packages/sharpsell/assets/leadgen/images/ic_campaign.png": "eaa8732415fa436a97099d5ee3d1a58c",
"assets/packages/sharpsell/assets/leadgen/images/ic_child_future_banner.png": "a65afde4a376f5c677820b4e37e30f9c",
"assets/packages/sharpsell/assets/leadgen/images/ic_health_cover_planning.png": "d7131230e46e4b723bbf4602495d8bbd",
"assets/packages/sharpsell/assets/leadgen/images/ic_referral_share.svg": "b46ea9aa15c07ef8527a5e0d9567f344",
"assets/packages/sharpsell/assets/leadgen/images/ic_tools.png": "c2d4fb6186d034cb413e929dc2f7d719",
"assets/packages/sharpsell/assets/leadgen/images/ic_help.png": "4689e494deb8562fc0e4f580dfd4d628",
"assets/packages/sharpsell/assets/leadgen/images/ic_financial_protection.png": "e41957030b32c0ec8d90b0520df4d45d",
"assets/packages/sharpsell/assets/leadgen/images/ic_search.svg": "6fd15d20cc104d671fbef1978e4cd5c7",
"assets/packages/sharpsell/assets/leadgen/images/ic_call.png": "b811477e17a0cfb1471cc23a3b82c680",
"assets/packages/sharpsell/assets/leadgen/images/ic_sync.png": "4170e7fd08715549c4f920f673d939a3",
"assets/packages/sharpsell/assets/leadgen/images/ic_name.svg": "3b1d70fa47146e83c671517d66debee2",
"assets/packages/sharpsell/assets/company_specific_images/login_bg.png": "4f1b2f76f7148fe27b5f979e526adbf8",
"assets/packages/sharpsell/assets/company_specific_images/login_bg_web.png": "3a5e29260dfd6253761c4d6083c331fa",
"assets/packages/sharpsell/assets/company_specific_images/ic_login.png": "7b0f31d4063ee0e006ee9338d9645aed",
"assets/packages/sharpsell/assets/company_specific_images/splash_bg.png": "2d474360c3f6ed4d8a796cc2d4b2cf48",
"assets/packages/sharpsell/assets/analytics_dashboard/target.svg": "597bab3c513b6312c40623996b9e2d4d",
"assets/packages/sharpsell/assets/analytics_dashboard/trend.svg": "7d36a3488095bbad3ca66b3fd711bc02",
"assets/packages/sharpsell/assets/animations/car_static_web.json": "9945a907a9a6a80ef69d23c1346b1615",
"assets/packages/sharpsell/assets/animations/chakra_web.json": "1d5e485f0a4060f7e7a961611321aa9e",
"assets/packages/sharpsell/assets/animations/basketball_wrong_mob.json": "170e000d845a3d2194037a94cd926d8f",
"assets/packages/sharpsell/assets/animations/basketball_static_web.json": "b95d7d52c272bc1a3147a55f5de11d90",
"assets/packages/sharpsell/assets/animations/car_neutral_mob.json": "ad36ed2f537f1ee810c2a6073cb5dfaa",
"assets/packages/sharpsell/assets/animations/car_correct_mob.json": "f62a57db5f34a28e99e8139d2210cbca",
"assets/packages/sharpsell/assets/animations/option_wrong.riv": "823a40d24d2e8cea4ca93154a09394fe",
"assets/packages/sharpsell/assets/animations/option_correct.riv": "dae393555319ab29c42183a2c4fa6a4e",
"assets/packages/sharpsell/assets/animations/basketball_neutral_web.json": "b95d7d52c272bc1a3147a55f5de11d90",
"assets/packages/sharpsell/assets/animations/basketball_correct_web.json": "de682fdb3d772ab2350a10435598c78d",
"assets/packages/sharpsell/assets/animations/score_animation.json": "f23e6f45c83e6489373d4fe83a473c32",
"assets/packages/sharpsell/assets/animations/pass_completed_background.riv": "4c2c54af3cbbfc5c2d2e987dcd43124e",
"assets/packages/sharpsell/assets/animations/car_wrong_web.json": "3bfa68b85114fa9c3ab4f4a1d05cbacc",
"assets/packages/sharpsell/assets/animations/spotlight_web.json": "a691afeabe0919ddd50eea32d625dab6",
"assets/packages/sharpsell/assets/animations/completed_with_without_score.riv": "6a3a63fc21b25a64f7883cb547b444c3",
"assets/packages/sharpsell/assets/animations/pass_and_completed_background.riv": "43f0660556ae349ff63ac85874ba760f",
"assets/packages/sharpsell/assets/animations/car_wrong_mob.json": "f22eb6ee1d01baf069164f7edeb9a6a0",
"assets/packages/sharpsell/assets/animations/pass_icon.riv": "4edd80d99f0ab58dbbf613189a6d3ed0",
"assets/packages/sharpsell/assets/animations/spotlight_mob.json": "740651a618726e4f674d6560c65ca1b3",
"assets/packages/sharpsell/assets/animations/basketball_correct_mob.json": "ed1141285d7a792283dab25cdc18ad7e",
"assets/packages/sharpsell/assets/animations/basketball_neutral_mob.json": "601a509d3c42df70713d52ab75d218fb",
"assets/packages/sharpsell/assets/animations/car_correct_web.json": "0d78b0d3f802b1e422bb993d2320dbbf",
"assets/packages/sharpsell/assets/animations/car_neutral_web.json": "955b327c8f584b6ab758535878568363",
"assets/packages/sharpsell/assets/animations/car_static_mob.json": "746c189b81e9ab2905b1d908304ccb8a",
"assets/packages/sharpsell/assets/animations/chakra_mob.json": "dd6158004058cc92a79ab4562a50c2fd",
"assets/packages/sharpsell/assets/animations/basketball_wrong_web.json": "c3803857d5c91313c0e71f32956df220",
"assets/packages/sharpsell/assets/animations/basketball_static_mob.json": "601a509d3c42df70713d52ab75d218fb",
"assets/packages/sharpsell/assets/gif/round_loader.gif": "de5681d4dccce53f2c3f14dd07da7c79",
"assets/packages/sharpsell/assets/configurable_icons/ic_profile.svg": "397b7d7b630963566502437dcccc1ae7",
"assets/packages/sharpsell/assets/configurable_icons/ic_sync.svg": "b480a995315e1fe95bd2febafbf790eb",
"assets/packages/sharpsell/assets/configurable_icons/ic_search.svg": "08e4e5dcad1c72d5c01f89b3d253d00d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/company_input_bg.png": "657ef0d8b93d23b406f0dfc5c4440c4d",
"assets/assets/images/splash_bg.png": "2d474360c3f6ed4d8a796cc2d4b2cf48",
"firebase-analytics.js": "b4899e6c181e2191c18674ba59e3d174",
"sql-wasm.wasm": "9c67691cdfea004dda62090e49940eac",
"canvaskit/canvaskit.js": "c65ed02d7d5d5b2ec7e9ace8cd890240",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
