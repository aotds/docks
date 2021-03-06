import Updux from "updux";
import { action, payload } from "ts-action";
import u from "@yanick/updeep";
import { createSelector } from "reselect";

const dux = new Updux({
    initial: {
        standard: 0, advanced: 0, cost: 0, mass: 0,
    }
});

const set_screens = action('set_screens', payload() );
dux.addMutation(set_screens, payload => u.update(payload) );

const set_screens_reqs = action('set_screens_reqs', payload() );
dux.addMutation(set_screens_reqs, payload => u.update(payload) );

export default dux.asDux;
