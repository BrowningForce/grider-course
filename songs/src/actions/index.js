// Action creator
export const selectSong = (song) => {
    // Return action
    return {
        type: 'SELECT_SONG',
        payload: song,
    };
}
