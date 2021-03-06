import Updux from "updux";
import  { action, payload } from 'ts-action';
import u from "@yanick/updeep";
import { createSelector } from 'reselect';
import { calc_ftl_reqs } from './rules';

// 'none' | 'standard' | 'advanced'
const set_ftl = action('set_ftl',payload());

const set_ftl_reqs = action('set_ftl_reqs', payload() );

console.log(Updux);
const dux = new Updux({
    initial: {
                mass: 0,
                cost: 0,
                type: 'none'
    }
});

dux.addMutation(set_ftl, type => u.update({type}));
dux.addMutation(set_ftl_reqs, reqs => u.update(reqs) );

export default dux.asDux;

