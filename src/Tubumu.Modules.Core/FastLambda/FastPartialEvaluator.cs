﻿namespace Tubumu.Modules.Core.FastLambda
{
    /// <summary>
    /// FastPartialEvaluator
    /// </summary>
    public class FastPartialEvaluator : PartialEvaluatorBase
    {
        /// <summary>
        /// Constructor
        /// </summary>
        public FastPartialEvaluator()
            : base(new FastEvaluator())
        {
        }
    }
}
