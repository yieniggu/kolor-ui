// Types used for setting states on redux
export const types = {
  uiOpenLoginModal: "[ui] Open Login Modal",
  uiCloseLoginModal: "[ui] Close Login Modal",

  uiOpenOffsetModal: "[ui] Open offset Modal",
  uiCloseOffsetModal: "[ui] Close offset modal",

  uiOpenTokensModal: "[ui] Open land tokens modal",
  uiCloseTokensModal: "[ui] Close land tokens modal",

  NFTMintToggle: "[NFT] Starting or (ending with errors) new NFT",
  NFTMintFinished: "[NFT] New NFT Minted success",

  NFTGetStart: "[NFT] Getting land information",
  NFTGetFinished: "[NFT] Land information fetched",
  NFTErrorTrue: "[NFT] Error on fetching nft info",
  NFTErrorFalse: "[NFT] Init or success on fetching",

  NFTsGetStart: "[NFT] Getting all lands information",
  NFTsGetFinished: "[NFT] All Lands information fetched",

  NFTsGetPublished: "[NFT] Getting published lands",
  NFTsGetPublishedFinished: "[NFT] All published lands fetched",

  NFTPublishingSof: "[NFT] Publishing selected land to marketplace sof",
  NFTPublishing: "[NFT] Land published succesfully",

  tokensGetStart: "[token] Fetching token assets balances",
  tokensGetFinish: "[token] Finish fetching token assets",

  tokenAcquire: "[token] Acquire land tokens",

  offsetRequestStart: "[offset] New offset request",
  offsetRequestFinish: "[ofset] Offset request finished",

  offsetRequestsGetStart: "[offset] Getting offset requests",
  offsetRequestsGetFinish: "[offset] All requests fetched",

  authCheckingFinish: "[auth] Finish checking login state",
  authLogin: "[auth] Login",
  authStartTokenRenew: "[auth] Start token Renew",
  authLogout: "[auth] Logout",
};
