"use strict";

/**
 * @summary
 * Deposits the values of a fieldset of inputs into an array.
 * @param {*} fieldset
 * The HTML element to dump the child inputs of.
 * @param {boolean} returns 
 * If set to true, method will return the value attributes of each of the dumped inputs.
 * @returns  
 */
Element.prototype.DumpFieldset = function(fieldset = this, returns = true)
{
    try
    {
        if (typeof fieldset === "object" && fieldset.querySelector("input") != null)
        {
            let inputs = fieldset.querySelectorAll("input");
            let output = new Array();

            for (let i = 0; i < inputs.length; i++)
            {
                output[i] = inputs[i].value;
                inputs[i].value = null;
            }

            return (returns ? output : null);
        }
        else if (typeof fieldset !== "object")
        {
            throw TypeError(this + ".DumpFieldset() => Invalid parameter type " + typeof fieldset + " - must be of type Object");
        }
        else
        {
            throw Error(this + ".DumpFieldSet() => fieldset is null");
        }
    }
    catch(err)
    {
        console.error(err);
    }
};

Array.prototype.KeyExists = function(key = '', returns = false, returnOnFail = false)
{
    let keyNotFound = new Array;
    try
    {
        let arr = new Array;
        for (let i = 0; i < this.length; i++)
        {
            if (this[i][key] != undefined)
            {
                arr.push(this[i][key]);
            }
            else
            {
                keyNotFound.push(i);
            }
        }
        if (arr[0] != undefined)
        {
            return returns ? arr : true;
        }
        if (returnOnFail)
        {
            throw Error(this + ".KeyExists() => Failed to find requested property in at least 1 case - " + keyNotFound);
        }
        return false;
    }
    catch(err)
    {
        console.warn(err);
    }
}

Array.prototype.DynSort = function(type = '', invert = false)
{
    try
    {
        if (type !== '')
        {
            return this.sort(function(a, b)
            {
            if (a[type] > b[type])
            {
                return invert ? -1 : 1;
            }
            else if (b[type] > a[type])
            {
                return invert ? 1 : -1;
            }
            else if (a[type] === b[type])
            {
                return 0;
            }
            else
            {
                throw Error(this + ".DynSort() => Parameter 'type' does not match any key in " + this);
            }})
        }
        else
        {
            throw TypeError(this + ".DynSort() => Parameter 'type' must be assigned a value");
        }
    }
    catch(err)
    {
        console.error(err);
    }
};

const JMath =
{
    Sum:
    function(...values)
    {
        try
        {
            let sum = 0;
            for (let i = 0; i < values.length; i++)
            {
                if (typeof values[i] === "number")
                {
                    sum += values[i];
                }
                else
                {
                    throw TypeError("JMath.Sum() => At least 1 parameter is not a number or float");
                }
            }
            return sum;
        }
        catch(err)
        {
            console.error(err);
        }
    },
    
    Average:
    function(...values)
    {
        return (JMath.Sum(values) / values.length);
    },

    Random:
    function(min = 0, max = 9, decimals = false)
    {
        try
        {
            if (typeof min === "number" && typeof max === "number")
            {
                interMin = decimals ? (min * 5) : min;
                interMax = decimals ? (max * 5) : max;

                return decimals ? (((Math.random() * (max - min)) / 5) + min) : Math.round((Math.random() * (max - min)) + min)
            }
            else if (typeof min !== "number")
            {
                throw TypeError("JMath.Random() => min is NaN");
            }
            else if (typeof max !== "number")
            {
                throw TypeError("JMath.Random() => max is NaN");
            }
            else
            {
                throw Error("JMath.Random() => Invalid return value");
            }
        }
        catch(err)
        {
            console.error(err);
        }
    }
};

/**
 * @summary
 * Object for generating dynamic HTML
 */
const JConstructor =
{
    current: [], // contains any nodes currently being processed by JConstructor
    
    /**
     * @summary
     * Generates HTML Nodes in parallel
     * @param {object} base
     * array|string: The name(s) of the elements to be formed in order. If a string or single-value array is passed, every generated node will be assigned the same base.
     * @param {object} attributes
     * array: The miscellaneous attributes to be appended to the forming elements. The data passed to this parameter must adhere to a strict format. For more information, please see official JMAC documentation at https://JWabbit017.github.io/JMAC.js
     */
    Form(base, attributes)
    {
        let arr = new Array;
        
        for (let i = 0; i < base.length; i++)
        {
            let el = document.createElement(base[i]);

            if (attributes[i] != undefined && attributes[i][0] != undefined)
            {
                for (let attribute of attributes)
                {
                    for (let property of attribute)
                    {
                        el.setAttribute(property[0], property[1]);
                    }
                }
            }
            else
            {
                throw SyntaxError(this + ".Form() => Invalid data structure");
            }

            arr.push(el);
        }

        return arr;
    }
};
