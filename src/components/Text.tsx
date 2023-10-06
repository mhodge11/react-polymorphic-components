import {
  forwardRef,
  PropsWithChildren,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactElement,
} from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

type Props<C extends ElementType, P> = PolymorphicComponentProps<C, P>;

type TextProps = {
  color?: CSSProperties["color"];
};

type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  P
> = PolymorphicComponentProps<C, P> & {
  ref?: PolymorphicRef<C>;
};

type TextComponent = <C extends ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TextProps>
) => ReactElement | null;

export const Text: TextComponent = forwardRef(
  <C extends ElementType = "span">(
    { as, style, color, children, ...restProps }: Props<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";
    const internalStyles = { style: { ...style, ...(color && { color }) } };

    return (
      <Component {...restProps} {...internalStyles} ref={ref}>
        {children}
      </Component>
    );
  }
);
